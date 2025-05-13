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
    
    // You could also generate and copy other files like matches.js from matches.csv here
  }
});

console.log('Data update complete!');
