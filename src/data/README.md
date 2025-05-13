# Championship Data Organization

This directory contains the organized data structure for the Classe FC website's championship information.

## Directory Structure

```
data/
├── tournamentDataLoader.js       # Central utility for loading tournament data
└── tournaments/                  # Main directory for tournament data
    ├── copa50tinha2025/         # Copa 50tinha 2025 tournament data
    │   ├── info.js              # Basic tournament information
    │   ├── calendar.js          # Complete match calendar
    │   └── matches.js           # Classe FC matches in this tournament
    └── copaLillico2024/         # Copa Lillico 2024 tournament data
        ├── info.js              # Basic tournament information
        └── matches.js           # Classe FC matches in this tournament
```

## Data Structure

### Tournament Info (`info.js`)

Contains basic information about the tournament:
- ID, name, year
- Organizer
- Status (active, upcoming, completed)
- Position (Campeão, Vice-campeão, etc.)
- Location
- Dates
- Number of teams
- Format
- Description
- Logo path

### Calendar Data (`calendar.js`)

Contains the complete match schedule for the tournament:
- Organized by rounds
- Each round has a date and list of matches
- Each match has teams, time, and game number

### Matches Data (`matches.js`)

Contains Classe FC's matches in the tournament:
- Match details (date, time, location)
- Opponents
- Scores (for completed matches)
- Status (completed, upcoming)
- Stage and round information
- Highlights (for completed matches)

## Usage

Import the necessary functions from `tournamentDataLoader.js` to access the data:

```javascript
import { 
  getAllTournaments, 
  getTournamentCalendar, 
  filterTournamentsByStatus, 
  getUpcomingMatches, 
  getRecentMatches 
} from '../data/tournamentDataLoader';

// Get all tournaments
const tournaments = getAllTournaments();

// Get calendar for a specific tournament
const calendar = getTournamentCalendar(tournamentId);

// Get upcoming matches
const upcomingMatches = getUpcomingMatches(3);

// Get recent matches
const recentMatches = getRecentMatches(3);

// Filter tournaments by status
const activeTournaments = filterTournamentsByStatus('active');
```

## Adding a New Tournament

1. Create a new directory under `tournaments/` with the tournament name and year
2. Create an `info.js` file with the tournament information
3. Create a `matches.js` file with Classe FC's matches
4. Create a `calendar.js` file if you have the complete tournament schedule
5. Update the imports in `tournamentDataLoader.js` to include the new tournament data
