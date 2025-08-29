# Overview

This is a birthday celebration RSVP website for Simran Mehra's birthday party on September 5th, 2024. The application is built as a full-stack web application that allows guests to RSVP for the celebration, view party details, and get information about the event. The site features a vibrant, Indian-themed design with multiple sections including hero, story, party details, timeline, RSVP form, FAQ, and contact information.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (TanStack Query) for server state management
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Forms**: React Hook Form with Zod validation for type-safe form handling

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **API Design**: RESTful API with JSON responses
- **Session Management**: Express sessions with PostgreSQL storage (connect-pg-simple)
- **Development Setup**: TSX for TypeScript execution in development

## Data Storage
- **Database**: PostgreSQL (configured for Neon Database via connection string)
- **Schema**: Two main tables - users and rsvps
- **Migrations**: Drizzle Kit for database schema management
- **Validation**: Zod schemas for runtime type checking and validation

## Key Features
- **RSVP System**: Guests can submit RSVPs with name, email, guest count, dietary restrictions, and messages
- **Duplicate Prevention**: Email-based duplicate RSVP prevention
- **Responsive Design**: Mobile-first responsive design with custom breakpoints
- **Form Validation**: Client and server-side validation with user-friendly error messages
- **Toast Notifications**: User feedback system for form submissions

## Development Workflow
- **Build Process**: Vite for frontend bundling, esbuild for server bundling
- **Type Safety**: Full TypeScript implementation across frontend, backend, and shared schemas
- **Hot Reload**: Vite HMR for frontend, TSX for backend development
- **Path Aliases**: Configured aliases for clean imports (@, @shared, @assets)

# External Dependencies

## Database Services
- **Neon Database**: PostgreSQL hosting service (via @neondatabase/serverless)
- **Connection**: Environment variable DATABASE_URL for database connectivity

## UI/UX Libraries
- **Radix UI**: Comprehensive set of accessible UI primitives
- **Lucide React**: Icon library for consistent iconography
- **Tailwind CSS**: Utility-first CSS framework
- **Class Variance Authority**: Utility for handling component variants

## Development Tools
- **Replit Integration**: Vite plugins for Replit development environment
- **PostCSS**: CSS processing with Tailwind and Autoprefixer
- **Date Functions**: date-fns for date manipulation

## Form and Validation
- **React Hook Form**: Form state management and validation
- **Zod**: Schema validation library
- **Drizzle Zod**: Integration between Drizzle schemas and Zod validation

## Fonts and Assets
- **Google Fonts**: Multiple font families including Architects Daughter, DM Sans, Fira Code, and Geist Mono
- **Unsplash**: External image hosting for celebration photos