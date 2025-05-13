/**
 * copa50tinha2025 Tournament Standings
 * Generated from match results based on image data
 * Last updated: 12/05/2025
 */

export const standingsData = {
  lastUpdated: "12/05/2025",
  teams: [
  {
    "name": "Classe FC",
    "played": 3,
    "wins": 2,
    "draws": 1,
    "losses": 0,
    "goalsFor": 7,
    "goalsAgainst": 3,
    "points": 7,
    "position": 1
  },
  {
    "name": "Tricolor",
    "played": 2,
    "wins": 2,
    "draws": 0,
    "losses": 0,
    "goalsFor": 6,
    "goalsAgainst": 3,
    "points": 6,
    "position": 2
  },
  {
    "name": "Cometa",
    "played": 3,
    "wins": 1,
    "draws": 1,
    "losses": 1,
    "goalsFor": 3,
    "goalsAgainst": 8,
    "points": 4,
    "position": 3
  },
  {
    "name": "União R.",
    "played": 3,
    "wins": 1,
    "draws": 0,
    "losses": 2,
    "goalsFor": 15,
    "goalsAgainst": 5,
    "points": 3,
    "position": 4
  },
  {
    "name": "Os Malas",
    "played": 3,
    "wins": 1,
    "draws": 0,
    "losses": 2,
    "goalsFor": 8,
    "goalsAgainst": 10,
    "points": 3,
    "position": 5
  },
  {
    "name": "São Paulo",
    "played": 2,
    "wins": 1,
    "draws": 0,
    "losses": 1,
    "goalsFor": 12,
    "goalsAgainst": 3,
    "points": 3,
    "position": 6
  },
  {
    "name": "Grêmio VR",
    "played": 2,
    "wins": 0,
    "draws": 0,
    "losses": 2,
    "goalsFor": 1,
    "goalsAgainst": 23,
    "points": 0,
    "position": 7
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