This is the oficial site of CFC.

# Classe FC - Official Website

This repository contains the official website for Classe FC, a soccer club based in Brazil. The website provides information about the team, players, tournaments, match results, and more.

## Project Overview

The website is built using modern web technologies:

- **Frontend**: React.js with Bootstrap for styling
- **Data Management**: CSV-based data management for maintaining tournament information
- **Deployment**: Configured for deployment to Netlify

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm (version 8 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-org/cfc2025.git
   cd cfc2025
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The site will be available at http://localhost:3000.

## Project Structure

- `src/` - React application source code
  - `components/` - Reusable UI components
  - `pages/` - Page components
  - `data/` - Data management code and tournament data
  - `services/` - API and data service functions
- `public/` - Static files and assets
  - `images/` - Images including team photos, logos, etc.
  - `audio/` - Audio files
- `scripts/` - Utility scripts for data management

## Updating Tournament Data

The project uses CSV files to store tournament data, which can be easily updated:

1. Edit the CSV files in the `src/data/tournaments/[tournament-id]/` directory
2. Run the update script to regenerate derived data:
   ```bash
   npm run update-data
   ```

For more information, see [Tournament Data Documentation](/src/data/README.md).

## Contributing

1. Create a feature branch: `git checkout -b feature/your-feature-name`
2. Make your changes
3. Commit your changes: `git commit -m "Add some feature"`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Submit a pull request

## License

This project is proprietary and confidential.

## Contact

For any questions or suggestions, please contact the Classe FC management team.
