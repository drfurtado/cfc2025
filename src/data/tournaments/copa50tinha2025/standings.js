/**
 * Copa 50tinha 2025 Tournament Standings
 * Generated automatically from match results
 * Last updated: 17/05/2025
 */

const standingsData = { // Changed to const
  lastUpdated: "17/05/2025",
  teams: [
  {
    "name": "CLASSE",
    "played": 4,
    "wins": 3,
    "draws": 1,
    "losses": 0,
    "goalsFor": 10,
    "goalsAgainst": 5,
    "points": 10,
    "position": 1
  },
  {
    "name": "TRIC0LOR",
    "played": 3,
    "wins": 3,
    "draws": 0,
    "losses": 0,
    "goalsFor": 7,
    "goalsAgainst": 3,
    "points": 9,
    "position": 2
  },
  {
    "name": "COMETA",
    "played": 4,
    "wins": 2,
    "draws": 1,
    "losses": 1,
    "goalsFor": 8,
    "goalsAgainst": 12,
    "points": 7,
    "position": 3
  },
  {
    "name": "UNIÃO R.",
    "played": 4,
    "wins": 1,
    "draws": 0,
    "losses": 3,
    "goalsFor": 17,
    "goalsAgainst": 8,
    "points": 3,
    "position": 4
  },
  {
    "name": "SÃO PAULO",
    "played": 3,
    "wins": 1,
    "draws": 0,
    "losses": 2,
    "goalsFor": 12,
    "goalsAgainst": 4,
    "points": 3,
    "position": 5
  },
  {
    "name": "OS MALAS",
    "played": 3,
    "wins": 1,
    "draws": 0,
    "losses": 2,
    "goalsFor": 8,
    "goalsAgainst": 7,
    "points": 3,
    "position": 6
  },
  {
    "name": "GRÊMIO VR",
    "played": 3,
    "wins": 0,
    "draws": 0,
    "losses": 3,
    "goalsFor": 5,
    "goalsAgainst": 28,
    "points": 0,
    "position": 7
  }
]
};

// Helper function to get standings sorted by position
const getStandings = () => { // Changed to const
  return [...standingsData.teams].sort((a, b) => a.position - b.position);
};

// Helper function to get the last updated date
const getStandingsLastUpdated = () => { // Changed to const
  return standingsData.lastUpdated;
};

module.exports = { standingsData, getStandings, getStandingsLastUpdated };