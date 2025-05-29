# Frontend-Backend Integration Guide

## Current State

The Classe FC website currently uses a static data approach with CSV files and JavaScript modules for data management. As the project grows, we plan to migrate to a backend API for more dynamic data handling.

## Backend API Roadmap

### Phase 1: API Design (Planning)

1. **API Endpoints**:
   - `/api/tournaments` - List all tournaments
   - `/api/tournaments/:id` - Get specific tournament details
   - `/api/matches` - List all matches
   - `/api/matches/:id` - Get specific match details
   - `/api/players` - List all players
   - `/api/players/:id` - Get specific player details
   - `/api/stats` - Get team statistics

2. **Authentication**:
   - Admin authentication for data updates
   - JWT-based token system

### Phase 2: Implementation

1. **Backend Technologies**:
   - Node.js with Express
   - MongoDB for data storage
   - Mongoose for data modeling

2. **Deployment**:
   - Backend API on a separate service (e.g., Vercel, AWS)
   - Frontend remains on Netlify

### Phase 3: Frontend Integration

1. **Service Layer**:
   - Create API service modules in `src/services/`
   - Implement data fetching with axios or fetch
   - Add error handling and loading states

2. **Data Flow**:
   - Replace static data imports with API calls
   - Implement data caching for performance
   - Add request interceptors for auth

## Implementation Guidelines

### API Service Structure

```javascript
// src/services/api.js
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://api.classefc.com';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor for auth
api.interceptors.request.use(config => {
  const token = localStorage.getItem('auth_token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export default api;
```

### Example Service Module

```javascript
// src/services/tournamentService.js
import api from './api';

export const getTournaments = async () => {
  try {
    const response = await api.get('/tournaments');
    return response.data;
  } catch (error) {
    console.error('Error fetching tournaments:', error);
    throw error;
  }
};

export const getTournamentById = async (id) => {
  try {
    const response = await api.get(`/tournaments/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching tournament ${id}:`, error);
    throw error;
  }
};
```

## Data Migration Plan

1. **Export Current Data**:
   - Create scripts to convert CSV data to JSON
   - Add migration scripts to the `scripts/` directory

2. **Database Setup**:
   - Design MongoDB schemas
   - Set up indexing for performance
   - Implement data validation

3. **Testing Strategy**:
   - Create parallel environments during migration
   - Test API endpoints against expected data
   - Implement integration tests

## Admin Interface

1. **Features**:
   - Authentication and authorization
   - CRUD operations for tournaments, matches, and players
   - Image upload for player photos and match highlights

2. **Implementation**:
   - Create protected routes in React Router
   - Implement form validation
   - Add real-time preview for content changes