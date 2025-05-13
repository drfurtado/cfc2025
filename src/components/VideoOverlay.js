import React, { useEffect } from 'react';
import './VideoOverlay.css';

const VideoOverlay = ({ isOpen, videoUrl, onClose }) => {
  console.log('DEBUG - VideoOverlay rendered with props:', { isOpen, videoUrl });
  
  // Prevent scrolling when the overlay is open and handle keyboard events
  useEffect(() => {
    console.log('DEBUG - VideoOverlay useEffect triggered with isOpen:', isOpen);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      console.log('DEBUG - Setting body overflow to hidden');
      
      // Add keyboard event listener to close on Escape key
      const handleEscape = (e) => {
        if (e.key === 'Escape') {
          console.log('DEBUG - Escape key pressed, closing overlay');
          onClose();
        }
      };
      
      document.addEventListener('keydown', handleEscape);
      return () => {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleEscape);
      };
    } else {
      document.body.style.overflow = '';
    }
    
    // Clean up on component unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, videoUrl]);
  
  // Don't render anything if the overlay is not open
  if (!isOpen) return null;
  
  // Convert YouTube URL formats to embed format
  const getEmbedUrl = (url) => {
    console.log('DEBUG - getEmbedUrl called with URL:', url);
    if (!url) {
      console.log('DEBUG - URL is empty, returning empty string');
      return '';
    }
    
    // Handle youtu.be format
    if (url.includes('youtu.be/')) {
      const embedUrl = url.replace('youtu.be/', 'youtube.com/embed/');
      console.log('DEBUG - Converted youtu.be URL to:', embedUrl);
      return embedUrl;
    }
    
    // Handle youtube.com/watch?v= format
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = url.split('v=')[1];
      const ampersandPosition = videoId.indexOf('&');
      let embedUrl;
      
      if (ampersandPosition !== -1) {
        embedUrl = `https://www.youtube.com/embed/${videoId.substring(0, ampersandPosition)}`;
      } else {
        embedUrl = `https://www.youtube.com/embed/${videoId}`;
      }
      
      console.log('DEBUG - Converted watch?v= URL to:', embedUrl);
      return embedUrl;
    }
    
    // If already in embed format or other format, return as is
    console.log('DEBUG - URL format not recognized, returning as is');
    return url;
  };

  const embedUrl = getEmbedUrl(videoUrl);
  console.log('DEBUG - Final embed URL to render:', embedUrl);

  return (
    <div className="video-overlay">
      <div className="video-overlay-content">
        <button className="video-overlay-close" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        <div className="video-container">
          {embedUrl ? (
            <iframe 
              src={embedUrl}
              title="YouTube Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <div style={{ padding: "20px", color: "white", textAlign: "center" }}>
              Não foi possível carregar o vídeo. URL inválida.
            </div>
          )}
        </div>
      </div>
      <div className="video-overlay-background" onClick={onClose}></div>
    </div>
  );
};

export default VideoOverlay;
