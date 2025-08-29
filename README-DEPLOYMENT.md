# Deployment Guide for Simran's Birthday Website

This guide helps you deploy the birthday invitation website to external platforms like Vercel, Netlify, or other hosting services.

## Option 1: Vercel Deployment (Recommended)

1. **Frontend (React App)**:
   - Push your code to GitHub
   - Connect your GitHub repo to Vercel
   - Set the build command: `cd client && npm install && npm run build`
   - Set the output directory: `client/dist`
   - Deploy

2. **Backend (API Routes)**:
   - Vercel will automatically handle the `/api` folder as serverless functions
   - The RSVP functionality will work through `/api/rsvp`

## Option 2: Netlify Deployment

1. **Frontend**:
   - Push to GitHub
   - Connect to Netlify
   - Build command: `cd client && npm install && npm run build`
   - Publish directory: `client/dist`

2. **Backend**:
   - Netlify Functions will handle the backend via the `netlify/functions` folder

## Option 3: Separate Frontend/Backend Hosting

### Frontend (Static Site):
Deploy the `client` folder to any static hosting (Netlify, Vercel, GitHub Pages):
- Run `cd client && npm install && npm run build`
- Upload the `client/dist` folder

### Backend (Server):
Deploy to platforms like Railway, Render, or Heroku:
- Use the existing Express server in the `server` folder
- Set environment variables for database connection

## Environment Variables Required:

- `DATABASE_URL` - PostgreSQL database connection string
- `PORT` - Server port (usually set by hosting provider)
- `NODE_ENV` - Set to "production"

## Database Setup:

For production, you'll need a PostgreSQL database. Options:
- **Neon** (recommended): https://neon.tech
- **Supabase**: https://supabase.com
- **PlanetScale**: https://planetscale.com
- **Railway**: https://railway.app

## Important Notes:

1. The current setup uses in-memory storage for RSVPs, which will reset on server restart
2. For production, connect a real database using the `DATABASE_URL` environment variable
3. Update the API base URL in the frontend if deploying backend separately
4. Remove Replit-specific configurations before external deployment

## Quick Start for Vercel:

1. Create account on Vercel
2. Connect your GitHub repository
3. Vercel will auto-detect the setup and deploy
4. Set environment variables in Vercel dashboard
5. Your site will be live at `your-project.vercel.app`