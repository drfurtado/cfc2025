// DirectVideoModal.js
import React, { useEffect } from 'react';
import './SimpleVideoPlayer.css';

const DirectVideoModal = ({ isOpen, videoUrl, onClose }) => {
  // Convert YouTube URL to embed URL
  const getEmbedUrl = (url) => {
    if (!url) return '';
    
    // Extract video ID from various YouTube URL formats
    let videoId = '';
    
    // Handle youtu.be format
    if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1];
      const ampersandPosition = videoId.indexOf('&');
      if (ampersandPosition !== -1) {
        videoId = videoId.substring(0, ampersandPosition);
      }
    } 
    // Handle youtube.com/watch?v= format
    else if (url.includes('youtube.com/watch?v=')) {
      videoId = url.split('v=')[1];
      const ampersandPosition = videoId.indexOf('&');
      if (ampersandPosition !== -1) {
        videoId = videoId.substring(0, ampersandPosition);
      }
    }
    
    // If we found a video ID, create the embed URL
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }
    
    // If already in embed format or we couldn't parse, return as is
    return url;
  };
  
  // Handle escape key - Always call hooks at the top level
  useEffect(() => {
    // Only add listeners and change body style if the modal is open
    if (isOpen) {
      const handleEsc = (event) => {
        if (event.key === 'Escape') {
          onClose();
        }
      };
      
      document.body.style.overflow = 'hidden'; // Prevent scrolling
      window.addEventListener('keydown', handleEsc);
      
      return () => {
        document.body.style.overflow = ''; // Restore scrolling
        window.removeEventListener('keydown', handleEsc);
      };
    }
  }, [isOpen, onClose]);
  
  const embedUrl = getEmbedUrl(videoUrl);
  
  // If not open, don't render anything
  if (!isOpen) return null;
  
  return (
    <div className="video-modal" onClick={onClose}>
      <div className="video-modal-content" onClick={e => e.stopPropagation()}>
        <button className="video-modal-close" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        <iframe 
          src={embedUrl}
          title="YouTube Video"
          width="100%"
          height="100%"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default DirectVideoModal;
