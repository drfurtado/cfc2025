import React from 'react';
import './PageBanner.css';

/**
 * Reusable page banner/hero section component
 * @param {string} backgroundImage - URL to the background image
 * @param {string} title - Main title text
 * @param {string} subtitle - Optional subtitle text
 * @param {React.ReactNode} children - Optional additional content
 * @param {object} overlayStyle - Optional style object to customize the overlay
 * @returns {React.ReactElement}
 */
const PageBanner = ({ backgroundImage, title, subtitle, children, overlayStyle }) => {
  const defaultOverlayStyle = {}; // Default styles are now primarily in CSS
  const combinedOverlayStyle = { ...defaultOverlayStyle, ...overlayStyle };

  return (
    <div className="page-banner" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="page-banner-overlay" style={combinedOverlayStyle}></div>
      <div className="page-banner-content">
        <h1 className="page-banner-title">{title}</h1>
        {subtitle && <p className="page-banner-subtitle">{subtitle}</p>}
        {children}
      </div>
    </div>
  );
};

export default PageBanner;
