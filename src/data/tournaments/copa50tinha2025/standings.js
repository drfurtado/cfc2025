/**
 * Copa 50tinha 2025 Tournament Standings
 * Generated automatically from match results
 * Last updated: 07/06/2025
 */

const standingsData = { // Changed to const
  lastUpdated: "07/06/2025",
  teams: [
  {
    "name": "TRIC0LOR",
    "played": 6,
    "wins": 5,
    "draws": 1,
    "losses": 0,
    "goalsFor": 18,
    "goalsAgainst": 3,
    "points": 16,
    "position": 1
  },
  {
    "name": "CLASSE",
    "played": 6,
    "wins": 4,
    "draws": 1,
    "losses": 1,
    "goalsFor": 19,
    "goalsAgainst": 8,
    "points": 13,
    "position": 2
  },
  {
    "name": "OS MALAS",
    "played": 6,
    "wins": 4,
    "draws": 0,
    "losses": 2,
    "goalsFor": 19,
    "goalsAgainst": 9,
    "points": 12,
    "position": 3
  },
  {
    "name": "COMETA",
    "played": 6,
    "wins": 3,
    "draws": 2,
    "losses": 1,
    "goalsFor": 11,
    "goalsAgainst": 13,
    "points": 11,
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
    "played": 6,
    "wins": 1,
    "draws": 0,
    "losses": 5,
    "goalsFor": 15,
    "goalsAgainst": 11,
    "points": 3,
    "position": 6
  },
  {
    "name": "GRÊMIO VR",
    "played": 6,
    "wins": 0,
    "draws": 0,
    "losses": 6,
    "goalsFor": 6,
    "goalsAgainst": 52,
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