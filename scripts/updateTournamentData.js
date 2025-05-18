#!/usr/bin/env node

/**
 * Update Tournament Data Script
 * This script reads CSV data and generates JS files for the application
 */

const { updateStandingsFromMatchesCsv } = require('../src/data/csvDataProcessor');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Tournament folders to process
const tournamentFolders = [
  'copa50tinha2025',
  // Add other tournaments as needed
];

// Process each tournament
tournamentFolders.forEach(folder => {
  console.log(`Processing ${folder}...`);
  
  // Update standings from matches CSV
  updateStandingsFromMatchesCsv(folder);
  
  // Copy the updated files to frontend directory if it exists
  const srcPath = path.resolve(__dirname, '..', 'src', 'data', 'tournaments', folder);
  const frontendPath = path.resolve(__dirname, '..', 'frontend', 'src', 'data', 'tournaments', folder);
  
  if (fs.existsSync(frontendPath)) {
    console.log(`Copying files to frontend directory for ${folder}...`);
    
    // Copy standings.js
    try {
      fs.copyFileSync(
        path.join(srcPath, 'standings.js'),
        path.join(frontendPath, 'standings.js')
      );
      console.log(`Copied standings.js to frontend directory for ${folder}`);
    } catch (error) {
      console.error(`Error copying standings.js for ${folder}:`, error);
    }

    // Copy calendar.js
    try {
      fs.copyFileSync(
        path.join(srcPath, 'calendar.js'),
        path.join(frontendPath, 'calendar.js')
      );
      console.log(`Copied calendar.js to frontend directory for ${folder}`);
    } catch (error) {
      console.error(`Error copying calendar.js for ${folder}:`, error);
    }

    // Copy matches.js
    try {
      fs.copyFileSync(
        path.join(srcPath, 'matches.js'),
        path.join(frontendPath, 'matches.js')
      );
      console.log(`Copied matches.js to frontend directory for ${folder}`);
    } catch (error) {
      console.error(`Error copying matches.js for ${folder}:`, error);
    }
    
    // Copy scorers.js
    try {
      fs.copyFileSync(
        path.join(srcPath, 'scorers.js'),
        path.join(frontendPath, 'scorers.js')
      );
      console.log(`Copied scorers.js to frontend directory for ${folder}`);
    } catch (error) {
      console.error(`Error copying scorers.js for ${folder}:`, error);
    }
    
  }
});

console.log('Data update complete!');
