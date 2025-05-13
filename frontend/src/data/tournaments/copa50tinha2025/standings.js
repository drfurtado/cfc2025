/**
 * copa50tinha2025 Tournament Standings
 * Generated automatically from match results
 * Last updated: 26/02/2025
 */

export const standingsData = {
  lastUpdated: "26/02/2025",
  teams: [
  {
    "name": "Classe FC",
    "played": 5,
    "wins": 5,
    "draws": 0,
    "losses": 0,
    "goalsFor": 14,
    "goalsAgainst": 3,
    "points": 15,
    "position": 1
  },
  {
    "name": "São Paulo",
    "played": 1,
    "wins": 0,
    "draws": 0,
    "losses": 1,
    "goalsFor": 1,
    "goalsAgainst": 2,
    "points": 0,
    "position": 2
  },
  {
    "name": "Os Malas",
    "played": 1,
    "wins": 0,
    "draws": 0,
    "losses": 1,
    "goalsFor": 1,
    "goalsAgainst": 3,
    "points": 0,
    "position": 3
  },
  {
    "name": "Libertadores FC",
    "played": 1,
    "wins": 0,
    "draws": 0,
    "losses": 1,
    "goalsFor": 0,
    "goalsAgainst": 2,
    "points": 0,
    "position": 4
  },
  {
    "name": "Preston FC",
    "played": 1,
    "wins": 0,
    "draws": 0,
    "losses": 1,
    "goalsFor": 1,
    "goalsAgainst": 4,
    "points": 0,
    "position": 5
  },
  {
    "name": "GaviõesFC",
    "played": 1,
    "wins": 0,
    "draws": 0,
    "losses": 1,
    "goalsFor": 0,
    "goalsAgainst": 3,
    "points": 0,
    "position": 6
  }
]
};

// Helper function to get standings sorted by position
export const getStandings = () => {
  return [...standingsData.teams].sort((a, b) => a.position - b.position);
};

// Helper function to get the last updated date
export const getStandingsLastUpdated = () => {
  return standingsData.lastUpdated;
};

export default standingsData;