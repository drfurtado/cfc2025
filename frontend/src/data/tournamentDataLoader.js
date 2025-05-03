/**
 * Tournament Data Loader
 * Centralized utility for loading tournament data from the organized file structure
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

/**
 * Get all tournament information
 * @returns {Array} Array of tournament info objects
 */
export const getAllTournaments = () => {
  return [copa50tinha2025Info, copaLillico2024Info];
};

/**
 * Get tournament information by ID
 * @param {number} id - Tournament ID
 * @returns {Object|null} Tournament info object or null if not found
 */
export const getTournamentById = (id) => {
  const tournaments = getAllTournaments();
  return tournaments.find(tournament => tournament.id === id) || null;
};

/**
 * Get tournament calendar by tournament ID
 * @param {number} tournamentId - Tournament ID
 * @returns {Array|null} Tournament calendar data or null if not found
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
 * Get tournament rules by tournament ID
 * @param {number} tournamentId - Tournament ID
 * @returns {Object|null} Tournament rules data or null if not found
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
 * Get all matches across all tournaments
 * @returns {Array} Array of all match objects
 */
export const getAllMatches = () => {
  return [...copa50tinha2025Matches, ...copaLillico2024Matches];
};

/**
 * Get matches by tournament ID
 * @param {number} tournamentId - Tournament ID
 * @returns {Array} Array of match objects for the specified tournament
 */
export const getMatchesByTournament = (tournamentId) => {
  const allMatches = getAllMatches();
  return allMatches.filter(match => match.tournamentId === tournamentId);
};

/**
 * Get upcoming matches
 * @param {number} [limit=3] - Maximum number of matches to return
 * @returns {Array} Array of upcoming match objects
 */
export const getUpcomingMatches = (limit = 3) => {
  const allMatches = getAllMatches();
  return allMatches
    .filter(match => match.status === 'upcoming')
    .sort((a, b) => {
      // Sort by date (ascending)
      const dateA = new Date(a.date.split('/').reverse().join('/'));
      const dateB = new Date(b.date.split('/').reverse().join('/'));
      return dateA - dateB;
    })
    .slice(0, limit);
};

/**
 * Get recent matches
 * @param {number} [limit=3] - Maximum number of matches to return
 * @returns {Array} Array of recent match objects
 */
export const getRecentMatches = (limit = 3) => {
  const allMatches = getAllMatches();
  return allMatches
    .filter(match => match.status === 'completed')
    .sort((a, b) => {
      // Sort by date (descending)
      const dateA = new Date(a.date.split('/').reverse().join('/'));
      const dateB = new Date(b.date.split('/').reverse().join('/'));
      return dateB - dateA;
    })
    .slice(0, limit);
};

/**
 * Filter tournaments by status
 * @param {string} status - Tournament status ('active', 'upcoming', 'completed', or 'all')
 * @returns {Array} Array of filtered tournament info objects
 */
export const filterTournamentsByStatus = (status) => {
  const tournaments = getAllTournaments();
  
  if (status === 'all' || status === 'todos') {
    return tournaments;
  }
  
  return tournaments.filter(tournament => tournament.status === status);
};

/**
 * Helper function to get team logo
 * @param {string} teamName - Team name
 * @returns {string} Path to team logo
 */
export const getTeamLogo = (teamName) => {
  if (teamName === 'Classe FC') {
    return '/images/logo.svg';
  } else {
    return '/images/match-logos/generic.png';
  }
};

/**
 * Get standings for a tournament
 * @param {number} tournamentId - Tournament ID
 * @returns {Object|null} Standings data or null if not found
 */
export const getStandings = (tournamentId) => {
  switch (tournamentId) {
    case 1: // Copa 50tinha 2025
      return getCopa50tinha2025Standings();
    default:
      return null;
  }
};

/**
 * Get last updated timestamp for standings
 * @param {number} tournamentId - Tournament ID
 * @returns {number|null} Last updated timestamp or null if not found
 */
export const getStandingsLastUpdated = (tournamentId) => {
  switch (tournamentId) {
    case 1: // Copa 50tinha 2025
      return getCopa50tinha2025StandingsLastUpdated();
    default:
      return null;
  }
};
