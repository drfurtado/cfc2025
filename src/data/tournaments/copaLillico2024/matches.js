/**
 * Copa Lillico 2024 Matches Data
 * Contains completed matches for Classe FC
 */

export const matchesData = [
  {
    id: 3,
    tournament: 'Copa Lillico 2024',
    tournamentId: 2,
    date: '02/11/2024',
    time: '15:00',
    homeTeam: 'Classe FC',
    awayTeam: 'Unidos do CIC',
    homeScore: 2,
    awayScore: 0,
    location: 'Campo do Lillico',
    status: 'completed',
    stage: 'Final',
    round: 'Final',
    gameNumber: 15,
    highlights: [
      { time: 34, type: 'goal', team: 'Classe', player: 'Rafael Costa', description: 'Gol após jogada individual' },
      { time: 85, type: 'goal', team: 'Classe', player: 'Lucas Pereira', description: 'Gol de contra-ataque' }
    ]
  }
];

export default matchesData;
