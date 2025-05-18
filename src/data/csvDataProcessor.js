/**
 * CSV Data Processor for Tournament Data
 * This utility reads match data from CSV files and generates standings tables
 */

const fs = require('fs'); // Changed from import
const { parse } = require('csv-parse/sync'); // Changed from import
const { format } = require('date-fns'); // Changed from import
const { ptBR } = require('date-fns/locale'); // Changed from import
const path = require('path'); // Changed from import

/**
 * Read and parse a CSV file
 * @param {string} filePath - Path to the CSV file
 * @returns {Array} - Parsed CSV data as array of objects
 */
const readCsvFile = (filePath) => { // Changed to const
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8'); // fs.readFileSync
    return parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
      trim: true,
    });
  } catch (error) {
    console.error(`Error reading CSV file ${filePath}:`, error);
    return [];
  }
};

/**
 * Generate standings table from match data
 * @param {Array} matches - Array of match objects
 * @returns {Object} - Standings data with teams array and lastUpdated date
 */
const generateStandings = (matches) => { // Changed to const
  // Filter only completed matches
  const completedMatches = matches.filter(match => match.status === 'completed');
  
  if (completedMatches.length === 0) {
    return { teams: [], lastUpdated: format(new Date(), 'dd/MM/yyyy', { locale: ptBR }) }; // Added locale
  }

  // Get unique team names
  const teamNames = new Set();
  completedMatches.forEach(match => {
    if (match.homeTeam) teamNames.add(match.homeTeam); // Check for undefined
    if (match.awayTeam) teamNames.add(match.awayTeam); // Check for undefined
  });

  // Initialize team statistics
  const teamStats = {};
  teamNames.forEach(team => {
    teamStats[team] = {
      name: team,
      played: 0,
      wins: 0,
      draws: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      points: 0
    };
  });

  // Calculate statistics from matches
  completedMatches.forEach(match => {
    const homeTeam = match.homeTeam;
    const awayTeam = match.awayTeam;
    // Ensure scores are valid numbers, default to 0 if not
    const homeScore = parseInt(match.homeScore, 10) || 0;
    const awayScore = parseInt(match.awayScore, 10) || 0;

    if (homeTeam && teamStats[homeTeam]) { // Check if homeTeam and its stats object exist
      teamStats[homeTeam].played += 1;
      teamStats[homeTeam].goalsFor += homeScore;
      teamStats[homeTeam].goalsAgainst += awayScore;
    }

    if (awayTeam && teamStats[awayTeam]) { // Check if awayTeam and its stats object exist
      teamStats[awayTeam].played += 1;
      teamStats[awayTeam].goalsFor += awayScore;
      teamStats[awayTeam].goalsAgainst += homeScore;
    }

    // Update wins, draws, losses, and points
    if (homeTeam && teamStats[homeTeam] && awayTeam && teamStats[awayTeam]) { // Ensure both teams exist
        if (homeScore > awayScore) {
        // Home team wins
        teamStats[homeTeam].wins += 1;
        teamStats[homeTeam].points += 3;
        teamStats[awayTeam].losses += 1;
        } else if (homeScore < awayScore) {
        // Away team wins
        teamStats[awayTeam].wins += 1;
        teamStats[awayTeam].points += 3;
        teamStats[homeTeam].losses += 1;
        } else {
        // Draw
        teamStats[homeTeam].draws += 1;
        teamStats[homeTeam].points += 1;
        teamStats[awayTeam].draws += 1;
        teamStats[awayTeam].points += 1;
        }
    }
  });

  // Convert to array and sort by points, goal difference, goals for
  const teams = Object.values(teamStats).sort((a, b) => {
    // Sort by points (descending)
    if (b.points !== a.points) return b.points - a.points;
    
    // If points are equal, sort by goal difference
    const goalDiffA = a.goalsFor - a.goalsAgainst;
    const goalDiffB = b.goalsFor - b.goalsAgainst;
    if (goalDiffB !== goalDiffA) return goalDiffB - goalDiffA;
    
    // If goal difference is equal, sort by goals for
    if (b.goalsFor !== a.goalsFor) return b.goalsFor - a.goalsFor;
    
    // If still tied, sort alphabetically
    return a.name.localeCompare(b.name);
  });

  // Add positions
  teams.forEach((team, index) => {
    team.position = index + 1;
  });

  // Get the most recent match date for lastUpdated
  const lastMatch = completedMatches
    .filter(match => match.date) // Ensure match.date exists
    .sort((a, b) => {
        const dateA = new Date(a.date.split('/').reverse().join('-'));
        const dateB = new Date(b.date.split('/').reverse().join('-'));
        return dateB - dateA;
    })[0];

  return {
    teams,
    lastUpdated: lastMatch ? lastMatch.date : format(new Date(), 'dd/MM/yyyy', { locale: ptBR }) // Handle case where lastMatch is undefined
  };
};

/**
 * Write standings to a JavaScript file
 * @param {Object} standings - Standings data
 * @param {string} outputPath - Path to output the JS file
 */
const writeStandingsToJsFile = (standings, outputPath) => { // Changed to const
  try {
    const standingsJs = `/**
 * Copa 50tinha 2025 Tournament Standings
 * Generated automatically from match results
 * Last updated: ${standings.lastUpdated}
 */

const standingsData = { // Changed to const
  lastUpdated: "${standings.lastUpdated}",
  teams: ${JSON.stringify(standings.teams, null, 2)}
};

// Helper function to get standings sorted by position
const getStandings = () => { // Changed to const
  return [...standingsData.teams].sort((a, b) => a.position - b.position);
};

// Helper function to get the last updated date
const getStandingsLastUpdated = () => { // Changed to const
  return standingsData.lastUpdated;
};

module.exports = { standingsData, getStandings, getStandingsLastUpdated };`; // Changed to module.exports

    fs.writeFileSync(outputPath, standingsJs); // fs.writeFileSync
    console.log(`Standings written to ${outputPath}`);
  } catch (error) {
    console.error(`Error writing standings to ${outputPath}:`, error);
  }
};

/**
 * Main function to generate standings from match CSV
 * @param {string} tournamentFolder - Folder name of the tournament
 */
const updateStandingsFromMatchesCsv = (tournamentFolder) => { // Changed to const
  const baseDir = path.resolve(__dirname, '../data/tournaments', tournamentFolder); // Corrected path
  const matchesCsvPath = path.join(baseDir, 'matches.csv');
  const standingsJsPath = path.join(baseDir, 'standings.js');
  
  console.log(`Updating standings for ${tournamentFolder}...`);
  
  // Read matches CSV
  const matches = readCsvFile(matchesCsvPath);
  if (matches.length === 0) {
    console.error(`No matches found for ${tournamentFolder}`);
    return;
  }
  
  // Generate standings
  const standings = generateStandings(matches);
  
  // Write standings to JS file
  writeStandingsToJsFile(standings, standingsJsPath);
  
  console.log(`Standings for ${tournamentFolder} updated successfully!`);
};

module.exports = { // Exporting functions
  readCsvFile,
  generateStandings,
  writeStandingsToJsFile,
  updateStandingsFromMatchesCsv
};
