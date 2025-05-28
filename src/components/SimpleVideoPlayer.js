// SimpleVideoPlayer.js
import React, { useEffect, useRef } from 'react';
import './SimpleVideoPlayer.css';

const SimpleVideoPlayer = ({ videoId }) => {
  const containerRef = useRef(null);
  const playerRef = useRef(null);
  
  useEffect(() => {
    // Create the YouTube player when the component mounts
    if (videoId && containerRef.current && !playerRef.current) {
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(script);
      
      // Create YouTube player when API is ready
      window.onYouTubeIframeAPIReady = function() {
        playerRef.current = new window.YT.Player(containerRef.current, {
          height: '100%',
          width: '100%',
          videoId: videoId,
          playerVars: {
            autoplay: 1,
            modestbranding: 1,
            controls: 1,
            rel: 0
          }
        });
      };
    }
    
    return () => {
      // Clean up player when component unmounts
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [videoId]);
  
  return <div ref={containerRef} className="simple-video-player"></div>;
};

export default SimpleVideoPlayer;
