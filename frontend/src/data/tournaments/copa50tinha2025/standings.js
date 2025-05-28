/**
 * Copa 50tinha 2025 Tournament Standings
 * Generated automatically from match results
 * Last updated: 24/05/2025
 */

const standingsData = { // Changed to const
  lastUpdated: "24/05/2025",
  teams: [
  {
    "name": "TRIC0LOR",
    "played": 4,
    "wins": 4,
    "draws": 0,
    "losses": 0,
    "goalsFor": 16,
    "goalsAgainst": 3,
    "points": 12,
    "position": 1
  },
  {
    "name": "CLASSE",
    "played": 4,
    "wins": 3,
    "draws": 1,
    "losses": 0,
    "goalsFor": 10,
    "goalsAgainst": 5,
    "points": 10,
    "position": 2
  },
  {
    "name": "COMETA",
    "played": 5,
    "wins": 3,
    "draws": 1,
    "losses": 1,
    "goalsFor": 11,
    "goalsAgainst": 13,
    "points": 10,
    "position": 3
  },
  {
    "name": "OS MALAS",
    "played": 4,
    "wins": 2,
    "draws": 0,
    "losses": 2,
    "goalsFor": 12,
    "goalsAgainst": 9,
    "points": 6,
    "position": 4
  },
  {
    "name": "UNIÃO R.",
    "played": 5,
    "wins": 1,
    "draws": 0,
    "losses": 4,
    "goalsFor": 19,
    "goalsAgainst": 12,
    "points": 3,
    "position": 5
  },
  {
    "name": "SÃO PAULO",
    "played": 4,
    "wins": 1,
    "draws": 0,
    "losses": 3,
    "goalsFor": 13,
    "goalsAgainst": 7,
    "points": 3,
    "position": 6
  },
  {
    "name": "GRÊMIO VR",
    "played": 4,
    "wins": 0,
    "draws": 0,
    "losses": 4,
    "goalsFor": 5,
    "goalsAgainst": 37,
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