/**
 * Copa 50tinha 2025 Tournament Standings
 * Generated automatically from match results
 * Last updated: 31/05/2025
 */

const standingsData = { // Changed to const
  lastUpdated: "31/05/2025",
  teams: [
  {
    "name": "TRIC0LOR",
    "played": 5,
    "wins": 5,
    "draws": 0,
    "losses": 0,
    "goalsFor": 18,
    "goalsAgainst": 3,
    "points": 15,
    "position": 1
  },
  {
    "name": "CLASSE",
    "played": 5,
    "wins": 3,
    "draws": 1,
    "losses": 1,
    "goalsFor": 10,
    "goalsAgainst": 7,
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
    "played": 5,
    "wins": 3,
    "draws": 0,
    "losses": 2,
    "goalsFor": 18,
    "goalsAgainst": 9,
    "points": 9,
    "position": 4
  },
  {
    "name": "UNIÃO R.",
    "played": 6,
    "wins": 2,
    "draws": 0,
    "losses": 4,
    "goalsFor": 22,
    "goalsAgainst": 14,
    "points": 6,
    "position": 5
  },
  {
    "name": "SÃO PAULO",
    "played": 5,
    "wins": 1,
    "draws": 0,
    "losses": 4,
    "goalsFor": 15,
    "goalsAgainst": 10,
    "points": 3,
    "position": 6
  },
  {
    "name": "GRÊMIO VR",
    "played": 5,
    "wins": 0,
    "draws": 0,
    "losses": 5,
    "goalsFor": 5,
    "goalsAgainst": 43,
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