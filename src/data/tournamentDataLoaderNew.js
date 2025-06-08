/**
 * Tournament Data Loader
 * Centralized utility for loading tournament data from the organized file structure
 * Now supports both direct JS imports and CSV-generated data
 */

// Import tournament info
import copa50tinha2025Info from './tournaments/copa50tinha2025/info';
import copaLillico2024Info from './tournaments/copaLillico2024/info';

// Import tournament calendars
import { calendarData as copa50tinha2025Calendar } from './tournaments/copa50tinha2025/calendar';

// Import tournament matches
import { matchesData as copa50tinha2025Matches } from './tournaments/copa50tinha2025/matches';
import copaLillico2024Matches from './tournaments/copaLillico2024/matches';

// Import tournament rules
import { rulesData as copa50tinha2025Rules } from './tournaments/copa50tinha2025/rules';

// Import tournament standings
import { getStandings as getCopa50tinha2025Standings, getStandingsLastUpdated as getCopa50tinha2025StandingsLastUpdated } from './tournaments/copa50tinha2025/standings';

// Import tournament top scorers
import { getTopScorers as getCopa50tinha2025TopScorers, getTopScorersLastUpdated as getCopa50tinha2025TopScorersLastUpdated } from './tournaments/copa50tinha2025/scorers';

/**
 * Get all tournament information
 * @returns {Array} Array of tournament info objects
 */
export const getAllTournaments = () => {
  return [copa50tinha2025Info, copaLillico2024Info];
};

/**
 * Get all matches for a specific tournament
 * @param {number} tournamentId - ID of the tournament
 * @returns {Array} Array of match objects for the tournament
 */
export const getTournamentMatches = (tournamentId) => {
  switch (tournamentId) {
    case 1: // Copa 50tinha 2025
      return copa50tinha2025Matches;
    case 2: // Copa Lillico 2024
      return copaLillico2024Matches;
    default:
      return [];
  }
};

/**
 * Get calendar data for a specific tournament
 * @param {number} tournamentId - ID of the tournament
 * @returns {Object} Calendar data for the tournament
 */
export const getTournamentCalendar = (tournamentId) => {
  switch (tournamentId) {
    case 1: // Copa 50tinha 2025
      return copa50tinha2025Calendar;
    default:
      return null;
  }
};

/**
 * Get rules data for a specific tournament
 * @param {number} tournamentId - ID of the tournament
 * @returns {Object} Rules data for the tournament
 */
export const getTournamentRules = (tournamentId) => {
  switch (tournamentId) {
    case 1: // Copa 50tinha 2025
      return copa50tinha2025Rules;
    default:
      return null;
  }
};

/**
 * Get standings data for a specific tournament
 * @param {number} tournamentId - ID of the tournament
 * @returns {Array} Standings data for the tournament
 */
export const getStandings = (tournamentId = 1) => {
  switch (tournamentId) {
    case 1: // Copa 50tinha 2025
      return getCopa50tinha2025Standings();
    default:
      return [];
  }
};

/**
 * Get the last updated date for standings data
 * @param {number} tournamentId - ID of the tournament
 * @returns {string} Last updated date
 */
export const getStandingsLastUpdated = (tournamentId = 1) => {
  switch (tournamentId) {
    case 1: // Copa 50tinha 2025
      return getCopa50tinha2025StandingsLastUpdated();
    default:
      return '';
  }
};

/**
 * Get top scorers data for a specific tournament
 * @param {number} tournamentId - ID of the tournament
 * @returns {Array} Top scorers data for the tournament
 */
export const getTopScorers = (tournamentId = 1) => {
  switch (tournamentId) {
    case 1: // Copa 50tinha 2025
      return getCopa50tinha2025TopScorers();
    default:
      return [];
  }
};

/**
 * Get the last updated date for top scorers data
 * @param {number} tournamentId - ID of the tournament
 * @returns {string} Last updated date
 */
export const getTopScorersLastUpdated = (tournamentId = 1) => {
  switch (tournamentId) {
    case 1: // Copa 50tinha 2025
      return getCopa50tinha2025TopScorersLastUpdated();
    default:
      return '';
  }
};

/**
 * Get recent completed matches
 * @param {number} limit - Number of matches to return
 * @returns {Array} Array of recent completed matches
 */
export const getRecentMatches = (limit = 3) => {
  // Combine all matches from all tournaments
  const allMatches = [
    ...copa50tinha2025Matches,
    ...copaLillico2024Matches
  ];

  // Filter completed matches
  const completedMatches = allMatches.filter(match => match.status === 'completed');

  // Sort by date (most recent first)
  const sortedMatches = completedMatches.sort((a, b) => {
    const dateA = a.date.split('/').reverse().join('-');
    const dateB = b.date.split('/').reverse().join('-');
    return new Date(dateB) - new Date(dateA);
  });

  // Return the specified number of matches
  return sortedMatches.slice(0, limit);
};

/**
 * Get upcoming matches
 * @param {number} limit - Number of matches to return
 * @returns {Array} Array of upcoming matches
 */
export const getUpcomingMatches = (limit = 3) => {
  // Combine all matches from all tournaments
  const allMatches = [
    ...copa50tinha2025Matches,
    ...copaLillico2024Matches
  ];

  // Filter upcoming matches
  const upcomingMatches = allMatches.filter(match => match.status === 'upcoming');

  // Sort by date (earliest first)
  const sortedMatches = upcomingMatches.sort((a, b) => {
    const dateA = a.date.split('/').reverse().join('-');
    const dateB = b.date.split('/').reverse().join('-');
    return new Date(dateA) - new Date(dateB);
  });

  // Return the specified number of matches
  return sortedMatches.slice(0, limit);
};

/**
 * Get logo path for a team
 * @param {string} team - Team name
 * @returns {string} Logo path
 */
export const getTeamLogo = (team) => {
  const teamLogos = {
    'Classe FC': '/images/match-logos/classefc.svg',
    'União R.': '/images/match-logos/uniao-r.png',
    'Tricolor': '/images/match-logos/tricolor-new.png',
    'Os Malas': '/images/match-logos/generic.png',
    'Cometa': '/images/match-logos/cometa-new.png',
    'São Paulo': '/images/match-logos/spaulinho.png',
    'Grêmio VR': '/images/match-logos/generic.png',
    'Unidos do CIC': '/images/match-logos/generic.png',
  };

  return teamLogos[team] || '/images/match-logos/generic.png';
};

export default {
  getAllTournaments,
  getTournamentMatches,
  getTournamentCalendar,
  getTournamentRules,
  getStandings,
  getStandingsLastUpdated,
  getTopScorers,
  getTopScorersLastUpdated,
  getRecentMatches,
  getUpcomingMatches,
  getTeamLogo
};
