import React, { useState, useRef, useEffect } from 'react';
import './AudioPlayer.css';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  
  const audioRef = useRef(null);
  const progressBarRef = useRef(null);
  
  // Updated playlist with all songs from acrotona album
  const songs = [
    {
      title: "Bola a rolar",
      artist: "Acrotona",
      src: "/audio/albums/acrotona/Bola%20a%20rolar.mp3"
    },
    {
      title: "Coração Tricolor",
      artist: "Acrotona",
      src: "/audio/albums/acrotona/Cora%C3%A7%C3%A3o%20Tricolor.mp3"
    },
    {
      title: "1990",
      artist: "Acrotona",
      src: "/audio/albums/acrotona/1990.mp3"
    },
    {
      title: "Campeões da Vila",
      artist: "Acrotona",
      src: "/audio/albums/acrotona/Campe%C3%B5es%20da%20Vila.mp3"
    },
    {
      title: "Gritos da Torcida",
      artist: "Acrotona",
      src: "/audio/albums/acrotona/Gritos%20da%20Torcida.mp3"
    },
    {
      title: "Mais Que Um Jogo",
      artist: "Acrotona",
      src: "/audio/albums/acrotona/Mais%20Que%20Um%20Jogo.mp3"
    },
    {
      title: "Nossa Engrenagem",
      artist: "Acrotona",
      src: "/audio/albums/acrotona/Nossa%20Engrenagem.mp3"
    },
    {
      title: "Velha Guarda",
      artist: "Acrotona",
      src: "/audio/albums/acrotona/Velha%20Guarda.mp3"
    }
  ];
  
  const currentSong = songs[currentSongIndex];
  
  // Monitor window width to auto-expand on narrow screens
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  useEffect(() => {
    const audio = audioRef.current;
    
    const setAudioData = () => {
      setDuration(audio.duration);
      setCurrentTime(audio.currentTime);
    };
    
    const setAudioTime = () => setCurrentTime(audio.currentTime);
    
    // Add event listeners
    audio.addEventListener('loadeddata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    
    // Set volume
    audio.volume = volume;
    
    // Cleanup
    return () => {
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
    };
  }, [currentSongIndex, volume]);
  
  const togglePlay = () => {
    const audio = audioRef.current;
    
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    
    setIsPlaying(!isPlaying);
  };
  
  const handleProgress = (e) => {
    const progressBar = progressBarRef.current;
    const percent = (e.nativeEvent.offsetX / progressBar.offsetWidth);
    const newTime = percent * duration;
    
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };
  
  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };
  
  const playPrevious = () => {
    setCurrentSongIndex(prev => (prev === 0 ? songs.length - 1 : prev - 1));
    setIsPlaying(true);
    setTimeout(() => {
      audioRef.current.play();
    }, 100);
  };
  
  const playNext = () => {
    setCurrentSongIndex(prev => (prev === songs.length - 1 ? 0 : prev + 1));
    setIsPlaying(true);
    setTimeout(() => {
      audioRef.current.play();
    }, 100);
  };
  
  // Format time in MM:SS
  const formatTime = (time) => {
    if (isNaN(time)) return "00:00";
    
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  
  // Determine if player should be expanded based on screen width
  const shouldExpand = windowWidth <= 576;
  
  return (
    <div className={`audio-player-bar ${shouldExpand ? 'expanded' : ''}`}>
      <div className="audio-player-content">
        <div className="song-info">
          <span className="song-prefix">Acrotona:</span> {currentSong.title}
        </div>
        
        <div className="player-controls">
          <button className="control-button" onClick={playPrevious}>
            <i className="fas fa-backward"></i>
          </button>
          
          <button className="play-button" onClick={togglePlay}>
            {isPlaying ? (
              <i className="fas fa-pause"></i>
            ) : (
              <i className="fas fa-play" style={{ marginLeft: "2px" }}></i>
            )}
          </button>
          
          <button className="control-button" onClick={playNext}>
            <i className="fas fa-forward"></i>
          </button>
        </div>
        
        <div className="player-right">
          <div className="time-display">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
          
          <div className="volume-container">
            <i className="fas fa-volume-down"></i>
            <input 
              type="range" 
              min="0" 
              max="1" 
              step="0.01" 
              value={volume}
              onChange={handleVolumeChange}
              className="volume-slider"
            />
          </div>
        </div>
      </div>
      
      <div 
        className="progress-bar" 
        ref={progressBarRef}
        onClick={handleProgress}
      >
        <div 
          className="progress" 
          style={{ width: `${(currentTime / duration) * 100}%` }}
        ></div>
      </div>
      
      <audio 
        ref={audioRef}
        src={currentSong.src}
        onEnded={playNext}
      />
    </div>
  );
};

export default AudioPlayer;
