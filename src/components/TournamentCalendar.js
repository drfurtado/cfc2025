import React, { useState } from 'react';
import './TournamentCalendar.css';
import { calendarData as copa50tinha2025Calendar } from '../data/tournaments/copa50tinha2025/calendar'; // Import the data

const TournamentCalendar = () => { // Removed tournaments prop as we'll use imported data
  const [isOpen, setIsOpen] = useState(true);
  
  const toggleCalendar = () => {
    setIsOpen(!isOpen);
  };
  
  // Use the imported calendar data for Copa 50tinha 2025
  const tournamentDataToDisplay = copa50tinha2025Calendar;

  if (!isOpen) {
    return (
      <div className="tournament-calendar collapsed">
        <div className="calendar-header">
          <h2 className="calendar-title">Copa 50tinha 2025 - Calendário de Jogos</h2>
          <button className="open-button" onClick={toggleCalendar}>Ver Calendário</button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="tournament-calendar">
      <div className="calendar-header">
        <h2 className="calendar-title">Copa 50tinha 2025 - Calendário de Jogos</h2>
        <button className="close-button" onClick={toggleCalendar}>× Fechar</button>
      </div>
      <div className="calendar-info">
        <p>Confira abaixo o calendário completo da Copa 50tinha 2025.</p>
        <p>Os jogos acontecem aos sábados em Praça Central, Vila N. Sra. da Luz.</p>
      </div>

      <div className="calendar-rounds">
        {tournamentDataToDisplay.map((round, index) => (
          <div className="calendar-round" key={index}>
            <div className="round-header">{round.round} Rodada</div>
            <div className="round-date">{round.date}</div>
            <div className="round-matches">
              {round.matches.map((match, matchIndex) => (
                <div className="match-row" key={matchIndex}>
                  <div className="match-time">{match.time}</div>
                  <div className={`match-team home ${match.team1 === 'CLASSE' || match.team1 === 'CLASSE FC' ? 'classe-team' : ''}`}>{match.team1}</div>
                  <div className="match-score">{match.score ? match.score : '×'}</div>
                  <div className={`match-team away ${match.team2 === 'CLASSE' || match.team2 === 'CLASSE FC' ? 'classe-team' : ''}`}>{match.team2}</div>
                  <div className="match-number">Jogo {match.game}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TournamentCalendar;
