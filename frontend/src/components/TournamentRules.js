import React from 'react';
import './TournamentRules.css';

const TournamentRules = ({ rules }) => {
  if (!rules) return null;

  return (
    <div className="tournament-rules">
      <div className="rules-content">
        <h2 className="rules-title">{rules.title}</h2>
        <hr className="rules-divider" />
        
        {rules.sections.map((section, index) => (
          <div className="rules-section" key={index}>
            <h3 className="section-title">{section.title}</h3>
            <hr className="section-divider" />
            {section.content && (
              <p className="section-content">{section.content}</p>
            )}
            {section.list && (
              <ul className="section-list">
                {section.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
            {section.subsections && section.subsections.map((subsection, subIndex) => (
              <div className="rules-subsection" key={subIndex}>
                <h4 className="subsection-title">{subsection.title}</h4>
                <hr className="subsection-divider" />
                {subsection.content && (
                  <p className="subsection-content">{subsection.content}</p>
                )}
                {subsection.list && (
                  <ul className="subsection-list">
                    {subsection.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
                {subsection.numberedList && (
                  <ol className="subsection-numbered-list">
                    {subsection.numberedList.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ol>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TournamentRules;
