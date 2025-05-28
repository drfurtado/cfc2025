# Classe FC Tournament Data Management

## Overview

This project has been updated to use a CSV-based data management system for tournament information. This approach offers several benefits:

- **Single Source of Truth**: All match data is stored in CSV files, making it easier to update and maintain
- **Automatic Calculations**: Standings are automatically generated from match results
- **Consistency**: Eliminates the risk of inconsistent data across different parts of the application
- **Spreadsheet Editing**: CSV files can be easily edited with common tools like Excel or Google Sheets

## File Structure

```
src/data/
├── csvDataProcessor.js       # Utility for processing CSV data
├── tournamentDataLoader.js   # Central utility for loading tournament data
└── tournaments/             
    ├── copa50tinha2025/      
    │   ├── info.js           # Basic tournament information
    │   ├── matches.csv       # Match data in CSV format
    │   ├── standings.js      # Auto-generated standings (don't edit directly)
    │   └── ...
    └── ...
```

## How to Update Tournament Data

### 1. Update Match Results

Edit the CSV file for the tournament you want to update (e.g., `src/data/tournaments/copa50tinha2025/matches.csv`). Each row represents a match with the following columns:

- `id`: Unique identifier for the match
- `tournament`: Tournament name
- `tournamentId`: Tournament ID
- `date`: Match date (DD/MM/YYYY)
- `time`: Match time
- `homeTeam`: Home team name
- `awayTeam`: Away team name
- `homeScore`: Home team score (leave empty for upcoming matches)
- `awayScore`: Away team score (leave empty for upcoming matches)
- `location`: Match location
- `status`: Match status ("completed" or "upcoming")
- `stage`: Tournament stage
- `round`: Tournament round
- `gameNumber`: Game number
- `videoUrl`: URL to match video (optional)

### 2. Generate Updated Standings

Run the following command to automatically update the standings based on the match results:

```bash
npm run update-data
```

This will:
1. Read the match data from the CSV files
2. Calculate standings automatically
3. Update the standings.js file
4. Copy the updated files to the frontend directory if needed

### 3. Review and Commit Changes

After running the update script, review the generated files to ensure everything looks correct, then commit the changes to your repository.

## Important Notes

- **DO NOT** manually edit the standings.js file, as it will be overwritten by the update script
- Always run the update script after modifying the match data
- The CSV files should be kept under version control as the primary source of truth

## Adding a New Tournament

1. Create a new directory under `src/data/tournaments/` with the tournament name
2. Create an `info.js` file with the tournament information
3. Create a `matches.csv` file with the match data
4. Add the tournament to the list in `scripts/updateTournamentData.js`
5. Run the update script to generate the initial standings
