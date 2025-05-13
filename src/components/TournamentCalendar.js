import React, { useState } from 'react';
import './TournamentCalendar.css';

const TournamentCalendar = ({ tournaments }) => {
  const [isOpen, setIsOpen] = useState(true);
  
  const toggleCalendar = () => {
    setIsOpen(!isOpen);
  };
  
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
        {/* 1ª Rodada */}
        <div className="calendar-round">
          <div className="round-header">1ª Rodada</div>
          <div className="round-date">26/04</div>
          <div className="round-matches">
            <div className="match-row">
              <div className="match-time">14h</div>
              <div className="match-team home">CLASSE FC</div>
              <div className="match-score">2 × 1</div>
              <div className="match-team away">SÃO PAULO</div>
              <div className="match-number">Jogo 1</div>
            </div>
            <div className="match-row">
              <div className="match-time">15h</div>
              <div className="match-team home">UNIÃO R.</div>
              <div className="match-score">2 × 3</div>
              <div className="match-team away">TRICOLOR</div>
              <div className="match-number">Jogo 2</div>
            </div>
            <div className="match-row">
              <div className="match-time">16h</div>
              <div className="match-team home">COMETA</div>
              <div className="match-score">0 × 6</div>
              <div className="match-team away">OS MALAS</div>
              <div className="match-number">Jogo 3</div>
            </div>
          </div>
        </div>

        {/* 2ª Rodada */}
        <div className="calendar-round">
          <div className="round-header">2ª Rodada</div>
          <div className="round-date">03/05</div>
          <div className="round-matches">
            <div className="match-row">
              <div className="match-time">14h</div>
              <div className="match-team home">COMETA</div>
              <div className="match-score">1 × 1</div>
              <div className="match-team away">CLASSE FC</div>
              <div className="match-number">Jogo 4</div>
            </div>
            <div className="match-row">
              <div className="match-time">15h</div>
              <div className="match-team home">UNIÃO R.</div>
              <div className="match-score">12 × 0</div>
              <div className="match-team away">GRÊMIO VR</div>
              <div className="match-number">Jogo 5</div>
            </div>
            <div className="match-row">
              <div className="match-time">16h</div>
              <div className="match-team home">OS MALAS</div>
              <div className="match-score">1 × 3</div>
              <div className="match-team away">TRICOLOR</div>
              <div className="match-number">Jogo 6</div>
            </div>
          </div>
        </div>

        {/* 3ª Rodada */}
        <div className="calendar-round">
          <div className="round-header">3ª Rodada</div>
          <div className="round-date">10/05</div>
          <div className="round-matches">
            <div className="match-row">
              <div className="match-time">14h</div>
              <div className="match-team home">COMETA</div>
              <div className="match-score">2 × 1</div>
              <div className="match-team away">UNIÃO R.</div>
              <div className="match-number">Jogo 7</div>
            </div>
            <div className="match-row">
              <div className="match-time">15h</div>
              <div className="match-team home">GRÊMIO VR</div>
              <div className="match-score">1 × 11</div>
              <div className="match-team away">SÃO PAULO</div>
              <div className="match-number">Jogo 8</div>
            </div>
            <div className="match-row">
              <div className="match-time">16h</div>
              <div className="match-team home">OS MALAS</div>
              <div className="match-score">1 × 4</div>
              <div className="match-team away">CLASSE FC</div>
              <div className="match-number">Jogo 9</div>
            </div>
          </div>
        </div>
        
        {/* 4ª Rodada */}
        <div className="calendar-round">
          <div className="round-header">4ª Rodada</div>
          <div className="round-date">17/05</div>
          <div className="round-matches">
            <div className="match-row">
              <div className="match-time">14h</div>
              <div className="match-team home">GRÊMIO VR</div>
              <div className="match-score">×</div>
              <div className="match-team away">COMETA</div>
              <div className="match-number">Jogo 10</div>
            </div>
            <div className="match-row">
              <div className="match-time">15h</div>
              <div className="match-team home">CLASSE FC</div>
              <div className="match-score">×</div>
              <div className="match-team away">UNIÃO R.</div>
              <div className="match-number">Jogo 11</div>
            </div>
            <div className="match-row">
              <div className="match-time">16h</div>
              <div className="match-team home">TRICOLOR</div>
              <div className="match-score">×</div>
              <div className="match-team away">SÃO PAULO</div>
              <div className="match-number">Jogo 12</div>
            </div>
          </div>
        </div>
        
        {/* 5ª Rodada */}
        <div className="calendar-round">
          <div className="round-header">5ª Rodada</div>
          <div className="round-date">24/05</div>
          <div className="round-matches">
            <div className="match-row">
              <div className="match-time">14h</div>
              <div className="match-team home">UNIÃO R.</div>
              <div className="match-score">×</div>
              <div className="match-team away">OS MALAS</div>
              <div className="match-number">Jogo 13</div>
            </div>
            <div className="match-row">
              <div className="match-time">15h</div>
              <div className="match-team home">GRÊMIO VR</div>
              <div className="match-score">×</div>
              <div className="match-team away">TRICOLOR</div>
              <div className="match-number">Jogo 14</div>
            </div>
            <div className="match-row">
              <div className="match-time">16h</div>
              <div className="match-team home">SÃO PAULO</div>
              <div className="match-score">×</div>
              <div className="match-team away">COMETA</div>
              <div className="match-number">Jogo 15</div>
            </div>
          </div>
        </div>
        
        {/* 6ª Rodada */}
        <div className="calendar-round">
          <div className="round-header">6ª Rodada</div>
          <div className="round-date">31/05</div>
          <div className="round-matches">
            <div className="match-row">
              <div className="match-time">14h</div>
              <div className="match-team home">SÃO PAULO</div>
              <div className="match-score">×</div>
              <div className="match-team away">CLASSE FC</div>
              <div className="match-number">Jogo 16</div>
            </div>
            <div className="match-row">
              <div className="match-time">15h</div>
              <div className="match-team home">TRICOLOR</div>
              <div className="match-score">×</div>
              <div className="match-team away">UNIÃO R.</div>
              <div className="match-number">Jogo 17</div>
            </div>
            <div className="match-row">
              <div className="match-time">16h</div>
              <div className="match-team home">OS MALAS</div>
              <div className="match-score">×</div>
              <div className="match-team away">GRÊMIO VR</div>
              <div className="match-number">Jogo 18</div>
            </div>
          </div>
        </div>
        
        {/* 7ª Rodada */}
        <div className="calendar-round">
          <div className="round-header">7ª Rodada</div>
          <div className="round-date">07/06</div>
          <div className="round-matches">
            <div className="match-row">
              <div className="match-time">14h</div>
              <div className="match-team home">GRÊMIO VR</div>
              <div className="match-score">×</div>
              <div className="match-team away">CLASSE FC</div>
              <div className="match-number">Jogo 19</div>
            </div>
            <div className="match-row">
              <div className="match-time">15h</div>
              <div className="match-team home">SÃO PAULO</div>
              <div className="match-score">×</div>
              <div className="match-team away">OS MALAS</div>
              <div className="match-number">Jogo 20</div>
            </div>
            <div className="match-row">
              <div className="match-time">16h</div>
              <div className="match-team home">COMETA</div>
              <div className="match-score">×</div>
              <div className="match-team away">TRICOLOR</div>
              <div className="match-number">Jogo 21</div>
            </div>
          </div>
        </div>
        
        {/* 8ª Rodada */}
        <div className="calendar-round">
          <div className="round-header">8ª Rodada</div>
          <div className="round-date">14/06</div>
          <div className="round-matches">
            <div className="match-row">
              <div className="match-time">14h</div>
              <div className="match-team home">SÃO PAULO</div>
              <div className="match-score">×</div>
              <div className="match-team away">CLASSE FC</div>
              <div className="match-number">Jogo 22</div>
            </div>
            <div className="match-row">
              <div className="match-time">15h</div>
              <div className="match-team home">TRICOLOR</div>
              <div className="match-score">×</div>
              <div className="match-team away">UNIÃO R.</div>
              <div className="match-number">Jogo 23</div>
            </div>
            <div className="match-row">
              <div className="match-time">16h</div>
              <div className="match-team home">OS MALAS</div>
              <div className="match-score">×</div>
              <div className="match-team away">COMETA</div>
              <div className="match-number">Jogo 24</div>
            </div>
          </div>
        </div>
        
        {/* 9ª Rodada */}
        <div className="calendar-round">
          <div className="round-header">9ª Rodada</div>
          <div className="round-date">21/06</div>
          <div className="round-matches">
            <div className="match-row">
              <div className="match-time">14h</div>
              <div className="match-team home">UNIÃO R.</div>
              <div className="match-score">×</div>
              <div className="match-team away">COMETA</div>
              <div className="match-number">Jogo 25</div>
            </div>
            <div className="match-row">
              <div className="match-time">15h</div>
              <div className="match-team home">SÃO PAULO</div>
              <div className="match-score">×</div>
              <div className="match-team away">GRÊMIO VR</div>
              <div className="match-number">Jogo 26</div>
            </div>
            <div className="match-row">
              <div className="match-time">16h</div>
              <div className="match-team home">CLASSE FC</div>
              <div className="match-score">×</div>
              <div className="match-team away">OS MALAS</div>
              <div className="match-number">Jogo 27</div>
            </div>
          </div>
        </div>
        
        {/* 10ª a 16ª Rodada - Playoffs */}
        <div className="calendar-round">
          <div className="round-header">10ª Rodada</div>
          <div className="round-date">28/06</div>
          <div className="round-matches">
            <div className="match-row">
              <div className="match-time">14h</div>
              <div className="match-team home">UNIÃO R.</div>
              <div className="match-score">×</div>
              <div className="match-team away">COMETA</div>
              <div className="match-number">Jogo 28</div>
            </div>
            <div className="match-row">
              <div className="match-time">15h</div>
              <div className="match-team home">SÃO PAULO</div>
              <div className="match-score">×</div>
              <div className="match-team away">GRÊMIO VR</div>
              <div className="match-number">Jogo 29</div>
            </div>
            <div className="match-row">
              <div className="match-time">16h</div>
              <div className="match-team home">CLASSE FC</div>
              <div className="match-score">×</div>
              <div className="match-team away">OS MALAS</div>
              <div className="match-number">Jogo 30</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentCalendar;
