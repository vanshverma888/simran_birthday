import type { Handler } from '@netlify/functions';
import { insertRsvpSchema, type InsertRsvp, type Rsvp } from "../../shared/schema";
import { z } from "zod";

// In-memory storage for demo purposes
// In production, you'd want to use a proper database
const rsvps: Map<string, Rsvp> = new Map();

function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}

export const handler: Handler = async (event, context) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod === 'POST') {
    try {
      const body = JSON.parse(event.body || '{}');
      const validatedData = insertRsvpSchema.parse(body);
      
      // Check if user already RSVPed
      const existingRsvp = Array.from(rsvps.values()).find(
        rsvp => rsvp.email === validatedData.email
      );
      
      if (existingRsvp) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ message: "You have already RSVPed for this event. Thank you!" })
        };
      }
      
      const id = generateId();
      const rsvp: Rsvp = {
        ...validatedData,
        guestCount: validatedData.guestCount || 1,
        dietaryRestrictions: validatedData.dietaryRestrictions || "none",
        message: validatedData.message || null,
        id,
        createdAt: new Date()
      };
      
      rsvps.set(id, rsvp);
      
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ message: "RSVP submitted successfully!", rsvp })
      };
    } catch (error) {
      if (error instanceof z.ZodError) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ message: "Invalid data provided", errors: error.errors })
        };
      }
      console.error("RSVP error:", error);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ message: "Failed to submit RSVP" })
      };
    }
  } else if (event.httpMethod === 'GET') {
    try {
      const allRsvps = Array.from(rsvps.values());
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(allRsvps)
      };
    } catch (error) {
      console.error("Get RSVPs error:", error);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ message: "Failed to fetch RSVPs" })
      };
    }
  } else {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ message: "Method not allowed" })
    };
  }
};