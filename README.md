# My Next.js Application

This is a modern web application built with Next.js 15.1.6 and React 18.3.1.

## Setup and Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my-app
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

### Development Mode
To run the application in development mode with hot-reload:
```bash
npm run dev
```
The application will be available at `http://localhost:3000`.

### Production Build
To create a production build:
```bash
npm run build
```

To start the production server:
```bash
npm run start
```

### Linting
To run the linter:
```bash
npm run lint
```

## Project Structure

```
my-app/
├── app/
│   └── user/
│       └── [id]/
│           └── page.jsx
├── components/
│   ├── loading-spinner.jsx
│   └── user-card.jsx
├── hooks/
│   └── useUser.js
├── utils/
│   ├── api.js
│   └── queryKey.js
└── public/
```

## Technical Overview

### Key Technologies
- **Next.js** (v15.1.6) - React framework for production
- **React** (v18.3.1) - UI library
- **React Query** (@tanstack/react-query v4.36.1) - Data fetching and state management
- **Lucide React** (v0.474.0) - Icon components
- **TailwindCSS** (v3.4.1) - Utility-first CSS framework

### Development Tools
- ESLint with Next.js configuration
- PostCSS for CSS processing
- TailwindCSS for styling

## API Integration

The application uses React Query for API integrations. Key API-related files:
- `utils/api.js` - API utility functions
- `utils/queryKey.js` - React Query key definitions
- `hooks/useUser.js` - Custom hook for user data fetching

## Design Decisions and Assumptions

1. The application follows a dynamic routing pattern for user pages (`/user/[id]`)
2. Components are organized by feature and reusability
3. Global styles are managed through TailwindCSS and globals.css
4. API calls are centralized in the utils/api.js file
5. Loading states are handled with a dedicated loading-spinner component

## Testing

To test API integrations:
1. Ensure the development server is running
2. Visit the appropriate routes (e.g., `/user/1`)
3. Check the network tab in your browser's developer tools
4. Verify that data is being fetched and displayed correctly

## Additional Notes

- The project uses TailwindCSS for styling - make sure to follow the established design patterns
- All API calls should be wrapped in React Query hooks for consistent data fetching
- The application is configured with turbopack for faster development builds

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Run linting: `npm run lint`
4. Submit a pull request

For any questions or issues, please refer to the project's issue tracker.