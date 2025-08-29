import type { VercelRequest, VercelResponse } from '@vercel/node';
import { insertRsvpSchema, type InsertRsvp, type Rsvp } from "../shared/schema";
import { z } from "zod";

// In-memory storage for demo purposes
// In production, you'd want to use a proper database
const rsvps: Map<string, Rsvp> = new Map();

function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    try {
      const validatedData = insertRsvpSchema.parse(req.body);
      
      // Check if user already RSVPed
      const existingRsvp = Array.from(rsvps.values()).find(
        rsvp => rsvp.email === validatedData.email
      );
      
      if (existingRsvp) {
        return res.status(400).json({ 
          message: "You have already RSVPed for this event. Thank you!" 
        });
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
      res.status(200).json({ message: "RSVP submitted successfully!", rsvp });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Invalid data provided", 
          errors: error.errors 
        });
      }
      console.error("RSVP error:", error);
      res.status(500).json({ message: "Failed to submit RSVP" });
    }
  } else if (req.method === 'GET') {
    try {
      const allRsvps = Array.from(rsvps.values());
      res.status(200).json(allRsvps);
    } catch (error) {
      console.error("Get RSVPs error:", error);
      res.status(500).json({ message: "Failed to fetch RSVPs" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}