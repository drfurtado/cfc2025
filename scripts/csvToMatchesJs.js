#!/usr/bin/env node

/**
 * Convert CSV data to matches.js file
 */

const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse/sync');

// Function to convert CSV team names to full names
const getFullTeamName = (csvName) => {
  const teamMap = {
    'CLASSE': 'Classe FC',
    'SÃO PAULO': 'São Paulo',
    'UNIÃO R.': 'União R.',
    'TRIC0LOR': 'Tricolor',
    'COMETA': 'Cometa',
    'OS MALAS': 'Os Malas',
    'GRÊMIO VR': 'Grêmio VR'
  };
  return teamMap[csvName] || csvName;
};

// Read CSV file
const csvPath = path.join(__dirname, '..', 'src', 'data', 'tournaments', 'copa50tinha2025', 'matches.csv');
const csvContent = fs.readFileSync(csvPath, 'utf8');
const matches = parse(csvContent, {
  columns: true,
  skip_empty_lines: true,
  trim: true,
});

// Convert to JS format
const jsMatches = matches.map(match => {
  const jsMatch = {
    id: parseInt(match.id),
    tournament: match.tournament,
    tournamentId: parseInt(match.tournamentId),
    date: match.date,
    time: match.time,
    homeTeam: getFullTeamName(match.homeTeam),
    awayTeam: getFullTeamName(match.awayTeam),
    location: match.location,
    status: match.status,
    stage: match.stage,
    round: match.round,
    gameNumber: parseInt(match.gameNumber)
  };

  // Add scores if the match is completed
  if (match.status === 'completed' && match.homeScore !== '' && match.awayScore !== '') {
    jsMatch.homeScore = parseInt(match.homeScore);
    jsMatch.awayScore = parseInt(match.awayScore);
  }

  // Add video URL if available
  if (match.videoUrl && match.videoUrl.trim() !== '') {
    jsMatch.videoUrl = match.videoUrl;
  }

  // Add highlights for specific matches (keeping existing ones)
  if (match.id === '1') {
    jsMatch.highlights = [
      { time: 10, type: 'goal', team: 'Classe FC', player: 'Mineiro' },
      { time: 23, type: 'goal', team: 'Classe FC', player: 'Batata' }
    ];
  } else if (match.id === '11') {
    jsMatch.highlights = [
      { time: '10', type: 'goal', team: 'Classe FC', player: 'Neno', description: 'Gol de Neno' },
      { time: '25', type: 'goal', team: 'Classe FC', player: 'Rildo', description: 'Gol de Rildo' },
      { time: '52', type: 'goal', team: 'Classe FC', player: 'Zé Luiz', description: 'Gol de Zé Luiz' }
    ];
  }

  return jsMatch;
});

// Generate JS file content
const jsContent = `/**
 * Copa 50tinha 2025 Matches Data
 * Contains completed and upcoming matches for Classe FC
 */

export const matchesData = ${JSON.stringify(jsMatches, null, 2)};

export default matchesData;
`;

// Write to matches.js file
const outputPath = path.join(__dirname, '..', 'src', 'data', 'tournaments', 'copa50tinha2025', 'matches.js');
fs.writeFileSync(outputPath, jsContent, 'utf8');

console.log('matches.js file updated successfully!');
