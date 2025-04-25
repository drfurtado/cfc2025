import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import AudioPlayer from './components/AudioPlayer';

// Pages
import HomePage from './pages/HomePage';
import TimePage from './pages/TimePage';
import HistoriaPage from './pages/HistoriaPage';
import CampeonatosPage from './pages/CampeonatosPage';

function App() {
  return (
    <Router>
      <div className="App">
        <AudioPlayer />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/time" element={<TimePage />} />
            <Route path="/historia" element={<HistoriaPage />} />
            <Route path="/campeonatos" element={<CampeonatosPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
