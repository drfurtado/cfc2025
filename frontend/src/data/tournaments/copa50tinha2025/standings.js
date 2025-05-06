/**
 * Copa 50tinha 2025 Tournament Standings
 * Based on match results and tournament rules
 */

export const standingsData = {
  // Standings as of May 6, 2025 (after Round 2)
  lastUpdated: "06/05/2025",
  teams: [
    {
      name: "Tricolor",
      played: 2,
      wins: 2,
      draws: 0,
      losses: 0,
      goalsFor: 6,
      goalsAgainst: 3,
      points: 6,
      position: 1
    },
    {
      name: "Classe FC",
      played: 2,
      wins: 1,
      draws: 1,
      losses: 0,
      goalsFor: 3,
      goalsAgainst: 2,
      points: 4,
      position: 2
    },
    {
      name: "União Ribeirão",
      played: 2,
      wins: 1,
      draws: 0,
      losses: 1,
      goalsFor: 14,
      goalsAgainst: 3,
      points: 3,
      position: 3
    },
    {
      name: "Os Malas",
      played: 2,
      wins: 1,
      draws: 0,
      losses: 1,
      goalsFor: 7,
      goalsAgainst: 3,
      points: 3,
      position: 4
    },
    {
      name: "Cometa",
      played: 2,
      wins: 0,
      draws: 1,
      losses: 1,
      goalsFor: 1,
      goalsAgainst: 7,
      points: 1,
      position: 5
    },
    {
      name: "S. Paulinho",
      played: 1,
      wins: 0,
      draws: 0,
      losses: 1,
      goalsFor: 1,
      goalsAgainst: 2,
      points: 0,
      position: 6
    },
    {
      name: "Grêmio VR",
      played: 1,
      wins: 0,
      draws: 0,
      losses: 1,
      goalsFor: 0,
      goalsAgainst: 12,
      points: 0,
      position: 7
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
