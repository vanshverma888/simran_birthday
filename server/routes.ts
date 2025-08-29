import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertRsvpSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // RSVP routes
  app.post("/api/rsvp", async (req, res) => {
    try {
      const validatedData = insertRsvpSchema.parse(req.body);
      
      // Check if user already RSVPed
      const existingRsvp = await storage.getRsvpByEmail(validatedData.email);
      if (existingRsvp) {
        return res.status(400).json({ 
          message: "You have already RSVPed for this event. Thank you!" 
        });
      }
      
      const rsvp = await storage.createRsvp(validatedData);
      res.json({ message: "RSVP submitted successfully!", rsvp });
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
  });

  app.get("/api/rsvp", async (req, res) => {
    try {
      const rsvps = await storage.getRsvps();
      res.json(rsvps);
    } catch (error) {
      console.error("Get RSVPs error:", error);
      res.status(500).json({ message: "Failed to fetch RSVPs" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
