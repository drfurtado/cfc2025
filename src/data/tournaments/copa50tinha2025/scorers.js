/**
 * Copa 50tinha 2025 Top Scorers
 * Based on match results
 */

export const scorersData = {
  // Top Scorers as of May 10, 2025 (after Round 3)
  lastUpdated: "10/05/2025",
  scorers: [
    {
      name: "Batata",
      team: "Classe FC",
      goals: 3,
      position: 1
    },
    {
      name: "Neno",
      team: "Classe FC",
      goals: 1,
      position: 2
    },
    {
      name: "Eleandro",
      team: "Classe FC",
      goals: 1,
      position: 2
    },
    {
      name: "Lucio",
      team: "Classe FC",
      goals: 1,
      position: 2
    },
    {
      name: "Chumbo",
      team: "Os Malas",
      goals: 1,
      position: 2
    }
  ]
};

// Helper function to get top scorers sorted by goals (descending)
export const getTopScorers = () => {
  return [...scorersData.scorers].sort((a, b) => b.goals - a.goals);
};

// Helper function to get the last updated date
export const getTopScorersLastUpdated = () => {
  return scorersData.lastUpdated;
};
