/**
 * Copa 50tinha 2025 Artilheiros Classe FC
 * Based on match results
 */

export const scorersData = {
  // Top Scorers as of May 17, 2025 (after Round 4)
  lastUpdated: "17/05/2025",
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
      goals: 2,
      position: 2
    },
    {
      name: "Eleandro",
      team: "Classe FC",
      goals: 1,
      position: 3
    },
    {
      name: "Lucio",
      team: "Classe FC",
      goals: 1,
      position: 3
    },
    {
      name: "Rildo",
      team: "Classe FC",
      goals: 1,
      position: 3
    },
    {
      name: "Zé Luiz",
      team: "Classe FC",
      goals: 1,
      position: 3
    }
  ]
};

// Helper function to get top scorers sorted by goals (descending)
export const getTopScorers = () => {
  // Sort first by goals descending, then by name ascending for tie-breaking
  return [...scorersData.scorers].sort((a, b) => {
    if (b.goals !== a.goals) {
      return b.goals - a.goals;
    }
    return a.name.localeCompare(b.name);
  });
};

// Helper function to get the last updated date
export const getTopScorersLastUpdated = () => {
  return scorersData.lastUpdated;
};
