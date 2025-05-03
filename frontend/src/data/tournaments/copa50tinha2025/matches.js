/**
 * Copa 50tinha 2025 Matches Data
 * Contains completed and upcoming matches for Classe FC
 */

export const matchesData = [
  {
    id: 1,
    tournament: 'Copa 50tinha 2025',
    tournamentId: 1,
    date: '26/04/2025',
    time: '14:00',
    homeTeam: 'Classe FC',
    awayTeam: 'S. Paulinho',
    homeScore: 2,
    awayScore: 1,
    location: 'Praça Central',
    status: 'completed',
    stage: 'Primeira Fase',
    round: '1ª',
    gameNumber: 1,
    highlights: [
      { time: 23, type: 'goal', team: 'Classe', player: 'Marcos Silva', description: 'Gol após cruzamento da direita' },
      { time: 55, type: 'goal', team: 'S.Paulinho', player: 'Roberto Alves', description: 'Gol de pênalti' },
      { time: 89, type: 'goal', team: 'Classe', player: 'Carlos Eduardo', description: 'Gol de cabeça após escanteio' }
    ]
  },
  {
    id: 4,
    tournament: 'Copa 50tinha 2025',
    tournamentId: 1,
    date: '03/05/2025',
    time: '14:00',
    homeTeam: 'Cometa',
    awayTeam: 'Classe FC',
    location: 'Praça Central',
    status: 'upcoming',
    stage: 'Primeira Fase',
    round: '2ª',
    gameNumber: 4
  },
  {
    id: 9,
    tournament: 'Copa 50tinha 2025',
    tournamentId: 1,
    date: '10/05/2025',
    time: '16:00',
    homeTeam: 'Os Malas',
    awayTeam: 'Classe FC',
    location: 'Praça Central',
    status: 'upcoming',
    stage: 'Primeira Fase',
    round: '3ª',
    gameNumber: 9
  }
];

export default matchesData;
