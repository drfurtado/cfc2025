import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import AudioPlayer from './components/AudioPlayer';
import DirectVideoModal from './components/DirectVideoModal';

// Pages
import HomePage from './pages/HomePage';
import TimePage from './pages/TimePage';
import HistoriaPage from './pages/HistoriaPage';
import CampeonatosPage from './pages/CampeonatosPage';

// Create Video Context to be used throughout the app
export const VideoContext = createContext();

function App() {
  const [videoOverlay, setVideoOverlay] = useState({
    isOpen: false,
    videoUrl: ''
  });

  // Function to open video overlay
  const openVideoOverlay = (url) => {
    // Skip overlay for the live stream URL
    if (url && url.includes('youtube.com/@vinitvcwb/streams')) {
      window.open(url, '_blank');
      return;
    }

    // Handle case where URL is undefined or null
    if (!url) {
      alert('Erro: O endereço do vídeo não está definido.');
      return;
    }
    
    // Set video overlay state
    try {
      setVideoOverlay({
        isOpen: true,
        videoUrl: url
      });
    } catch (error) {
      console.error('Erro ao abrir o vídeo:', error);
    }
  };

  // Function to close video overlay
  const closeVideoOverlay = () => {
    setVideoOverlay({
      isOpen: false,
      videoUrl: ''
    });
  };

  return (
    <VideoContext.Provider value={{ openVideoOverlay, closeVideoOverlay, videoOverlay }}>
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
          
          {/* Simple direct video modal that should work more reliably */}
          <DirectVideoModal
            isOpen={videoOverlay.isOpen} 
            videoUrl={videoOverlay.videoUrl} 
            onClose={closeVideoOverlay} 
          />
        </div>
      </Router>
    </VideoContext.Provider>
  );
}

export default App;
