# Frontend Components Documentation

This document provides an overview of the React components used in the Classe FC website. Use it as a reference when developing new features or modifying existing components.

## Layout Components

### Header (`src/components/Header.js`)

The main navigation component that appears at the top of every page.

**Props**: None (uses internal state for navigation)

**State**:
- `menuOpen`: Tracks whether the mobile menu is open
- `scrollPosition`: Tracks the scroll position for visual effects

**Key Features**:
- Responsive navigation menu
- Logo and brand display
- Mobile-friendly collapsible menu

### Footer (`src/components/Footer.js`)

The footer component that appears at the bottom of every page.

**Props**: None

**Key Features**:
- Club contact information
- Social media links
- Copyright information

### PageBanner (`src/components/PageBanner.js`)

A banner component used at the top of content pages.

**Props**:
- `title`: The title to display on the banner
- `subtitle`: Optional subtitle text
- `backgroundImage`: Optional background image path

## Content Components

### CarouselBanner (`src/components/CarouselBanner.js`)

A slideshow component used on the home page to showcase featured content.

**Props**:
- `slides`: Array of slide objects with image, title, and link

**State**:
- `activeIndex`: The index of the currently active slide

**Key Features**:
- Auto-advancing slides
- Manual navigation controls
- Responsive design

### MatchCard (`src/components/MatchCard.js`)

A card component that displays information about a single match.

**Props**:
- `match`: Match object with details
- `onClick`: Function to call when the card is clicked

**Key Features**:
- Visual display of teams, scores, and match status
- Support for upcoming and completed matches
- Call-to-action for match details

### StandingsTable (`src/components/StandingsTable.js`)

A table component that displays tournament standings.

**Props**:
- `standings`: Array of team standing objects
- `caption`: Optional table caption
- `compact`: Boolean for compact display mode

**Key Features**:
- Sortable columns
- Responsive design with horizontal scrolling on mobile
- Visual indication of team positions

## Tournament Components

### TournamentMatches (`src/components/TournamentMatches.js`)

Displays matches for a specific tournament.

**Props**:
- `tournamentId`: ID of the tournament
- `limit`: Optional limit for the number of matches to display

**Key Features**:
- Grouped by rounds or dates
- Filter by status (upcoming, completed)
- Link to individual match details

### TournamentStandings (`src/components/TournamentStandings.js`)

Displays standings for a specific tournament.

**Props**:
- `tournamentId`: ID of the tournament
- `compact`: Boolean for compact display mode

**Key Features**:
- Full table of standings
- Visual indicators for promotion/relegation zones
- Last updated timestamp

### TournamentCalendar (`src/components/TournamentCalendar.js`)

Displays the full calendar for a tournament.

**Props**:
- `tournamentId`: ID of the tournament

**Key Features**:
- Grouped by rounds
- Date and time information
- Visual indicators for Classe FC matches

## Media Components

### AudioPlayer (`src/components/AudioPlayer.js`)

A custom audio player component for playing audio files.

**Props**:
- `tracks`: Array of track objects with title, artist, and file URL
- `autoplay`: Boolean to enable autoplay

**State**:
- `currentTrackIndex`: Index of the current track
- `isPlaying`: Boolean tracking if audio is playing
- `progress`: Current playback progress

**Key Features**:
- Play/pause controls
- Track navigation
- Progress bar
- Volume control

### SimpleVideoPlayer (`src/components/SimpleVideoPlayer.js`)

A lightweight video player component.

**Props**:
- `videoUrl`: URL of the video to play
- `poster`: Optional poster image URL
- `autoplay`: Boolean to enable autoplay

**Key Features**:
- Basic video controls
- Responsive sizing
- Support for multiple video formats

### VideoOverlay (`src/components/VideoOverlay.js`)

A modal video player that overlays the current page.

**Props**:
- `videoUrl`: URL of the video to play
- `isOpen`: Boolean controlling visibility
- `onClose`: Function to call when closing the overlay

**Key Features**:
- Full-screen modal display
- Background dimming
- Close button
- Auto-focus management

## Usage Guidelines

1. **Component Composition**: When building new pages, compose existing components rather than creating new ones when possible.

2. **Responsive Design**: All components should work on both desktop and mobile devices. Test thoroughly on different screen sizes.

3. **Prop Validation**: Use PropTypes for all components to ensure correct usage.

4. **State Management**: Keep state as local as possible. Only lift state up when necessary.

5. **Styling**: Follow the project's CSS naming conventions and use the existing color variables from `src/colors.css`.