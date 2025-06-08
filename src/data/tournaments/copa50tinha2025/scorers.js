/**
 * Copa 50tinha 2025 Artilheiros Classe FC
 * Based on match results
 */

export const scorersData = {
  // Top Scorers as of June 8, 2025 (after Round 7)
  lastUpdated: "08/06/2025",
  scorers: [
    {
      name: "Sid",
      team: "Classe FC",
      goals: 3,
      position: 1
    },
    {
      name: "Rildo",
      team: "Classe FC",
      goals: 2,
      position: 2
    },
    {
      name: "Nato",
      team: "Classe FC",
      goals: 2,
      position: 2
    },
    {
      name: "Edson",
      team: "Classe FC",
      goals: 1,
      position: 4
    },
    {
      name: "Neno",
      team: "Classe FC",
      goals: 1,
      position: 4
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
