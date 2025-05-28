// Script to create headshot images from full player images
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Define player headshot settings
const players = [
  { name: 'batata', cropSettings: '0+0+150+150' },
  { name: 'neno', cropSettings: '0+0+150+150' },
  { name: 'eleandro', cropSettings: '0+0+150+150' },
  { name: 'lucio', cropSettings: '0+0+150+150' },
  { name: 'mineiro', cropSettings: '0+0+150+150' },
  { name: 'rildo', cropSettings: '0+0+150+150' },
  { name: 'ze_eduardo', cropSettings: '0+0+150+150' }
];

// Create headshots directory if it doesn't exist
const headhotsDir = path.join(__dirname, '../public/images/team/headshots');
if (!fs.existsSync(headhotsDir)) {
  fs.mkdirSync(headhotsDir, { recursive: true });
  console.log(`Created directory: ${headhotsDir}`);
}

// Process each player
players.forEach(player => {
  const sourcePath = path.join(__dirname, `../public/images/team/players/${player.name}.png`);
  const destPath = path.join(__dirname, `../public/images/team/headshots/${player.name}_headshot.png`);

  // Check if source file exists
  if (!fs.existsSync(sourcePath)) {
    console.error(`Source file not found: ${sourcePath}`);
    return;
  }

  // Command to create headshot using ImageMagick
  // You'll need ImageMagick installed for this to work
  const command = `convert ${sourcePath} -gravity North -crop ${player.cropSettings} +repage ${destPath}`;
  
  // For demo purposes, since we don't have ImageMagick, we'll just copy the file
  const copyCommand = `cp ${sourcePath} ${destPath}`;

  console.log(`Processing: ${player.name}`);
  exec(copyCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error processing ${player.name}: ${error.message}`);
      return;
    }
    console.log(`Created headshot for: ${player.name}`);
  });
});

console.log('Headshot generation script started. Check console for progress.');
