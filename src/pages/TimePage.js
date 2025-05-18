import React, { useState, useEffect, useCallback } from 'react';
import './TimePage.css';

// Define position order outside the component for stability
const positionOrder = [
  'Goleiro',
  'Zagueiro',
  'Lateral',
  'Volante',
  'Meia',
  'Atacante'
];

// Helper function to create safe filenames from names
const createSafeFilename = (name) => {
  if (!name) return '';
  return name
    .toLowerCase()
    .replace(/\s+/g, '_') // Replace spaces with underscores
    .replace(/[^a-z0-9_.-]/g, '') // Remove other special characters except underscore, dot, hyphen
    .replace(/\.+/g, '.') // Avoid multiple dots
    + '.png'; // Assume PNG format
};

function TimePage() {
  const [activeCategory, setActiveCategory] = useState('jogadores');
  const [players, setPlayers] = useState([]);
  const [staff, setStaff] = useState([]);
  const [directors, setDirectors] = useState([]);
  const [pastPlayers, setPastPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [showLightbox, setShowLightbox] = useState(false);

  // Function to sort players by position according to positionOrder
  const sortPlayersByPosition = useCallback((playersToSort) => {
    return [...playersToSort].sort((a, b) => {
      const posA = a.position.toLowerCase();
      const posB = b.position.toLowerCase();

      // Get index of position in positionOrder (case insensitive)
      const indexA = positionOrder.findIndex(pos =>
        posA.includes(pos.toLowerCase())
      );
      const indexB = positionOrder.findIndex(pos =>
        posB.includes(pos.toLowerCase())
      );

      // If both positions are found in positionOrder, sort by their order
      if (indexA !== -1 && indexB !== -1) {
        return indexA - indexB;
      }

      // If only one position is found, prioritize it
      if (indexA !== -1) return -1;
      if (indexB !== -1) return 1;

      // If neither is found, sort alphabetically
      return posA.localeCompare(posB);
    });
  }, []); // Dependency array is empty as positionOrder is now a constant

  // Group players by position
  const groupPlayersByPosition = useCallback((playersToGroup) => {
    const groups = {};

    playersToGroup.forEach(player => {
      let position = player.position;

      // Standardize position names
      for (const pos of positionOrder) {
        if (position.toLowerCase().includes(pos.toLowerCase())) {
          position = pos + 's'; // Pluralize
          break;
        }
      }

      // Default group if no match
      if (!positionOrder.some(pos => position.toLowerCase().includes(pos.toLowerCase()))) {
        position = 'Outros';
      }

      // Create group if it doesn't exist
      if (!groups[position]) {
        groups[position] = [];
      }

      groups[position].push(player);
    });

    return groups;
  }, []); // Empty dependency array

  // Group directors by role
  const groupDirectorsByRole = useCallback((directorsToGroup) => {
    const groups = {
      'Presidência': [],
      'Conselheiros': []
    };

    directorsToGroup.forEach(director => {
      if (director.role.toLowerCase().includes('presidente')) {
        groups['Presidência'].push(director);
      } else {
        groups['Conselheiros'].push(director);
      }
    });

    return groups;
  }, []); // Empty dependency array

  // Function to open lightbox
  const openLightbox = (person) => {
    setSelectedPerson(person);
    setShowLightbox(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };

  // Function to close lightbox
  const closeLightbox = () => {
    setShowLightbox(false);
    setSelectedPerson(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  // Fetch data from CSV files
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch players from CSV
        const playersResponse = await fetch('/players.csv');
        const playersText = await playersResponse.text();

        // Parse players CSV
        const playerLines = playersText.split('\n').filter(line => line.trim() !== '');
        const parsedPlayers = playerLines.map((line, index) => {
          let name, position;

          if (line.includes(',')) {
            [name, position] = line.split(',').map(item => item.trim());
          } else {
            // If no comma, try to extract position as the last word
            const parts = line.trim().split(/\s+/);
            position = parts.pop(); // Last word is position
            name = parts.join(' '); // Rest is name
          }

          return {
            id: index + 1,
            name: name || `Jogador ${index + 1}`,
            position: position || 'Campo',
            // Use player headshots from the new folder, with fallback to silhouette
            image: `/images/team/players/${createSafeFilename(name)}` 
          };
        });

        // Sort players by position
        const sortedPlayers = sortPlayersByPosition(parsedPlayers);
        setPlayers(sortedPlayers);

        // Fetch staff from CSV
        const staffResponse = await fetch('/comissao.csv');
        const staffText = await staffResponse.text();

        // Parse staff CSV
        const staffLines = staffText.split('\n').filter(line => line.trim() !== '');
        const parsedStaff = staffLines.map((line, index) => {
          let name, role;

          // Check if the line is likely a header (common pattern: contains 'nome' or 'cargo')
          if (index === 0 && (line.toLowerCase().includes('nome') || line.toLowerCase().includes('cargo'))) {
            return null; // Skip header row
          }

          if (line.includes(',')) { 
             [name, role] = line.split(',').map(item => item.trim());
           } else {
             name = line.trim();
             role = 'Comissão Técnica';
           }

          return {
            id: index + 1,
            name: name || `Staff ${index + 1}`,
            role: role || 'Comissão Técnica',
            // Generate image path based on name
            image: `/images/team/staff/${createSafeFilename(name)}` 
          };
        }).filter(Boolean); // Remove null entries (skipped header)

         setStaff(parsedStaff);

        // Fetch directors from CSV
        const directorsResponse = await fetch('/diretoria.csv');
        const directorsText = await directorsResponse.text();

        // Parse directors CSV
        const directorLines = directorsText.split('\n').filter(line => line.trim() !== '');
        const parsedDirectors = directorLines.map((line, index) => {
          let name, role;

          // Check if the line is likely a header
          if (index === 0 && (line.toLowerCase().includes('nome') || line.toLowerCase().includes('cargo') || line.toLowerCase().includes('diretor'))) {
             return null; // Skip header row
          }

          if (line.includes(',')) {
             [name, role] = line.split(',').map(item => item.trim());
           } else {
             name = line.trim();
             role = 'Diretor';
           }

          return {
            id: index + 1,
            name: name || `Diretor ${index + 1}`,
            role: role || 'Diretor',
            // Generate image path based on name
            image: `/images/team/directors/${createSafeFilename(name)}` 
          };
        }).filter(Boolean); // Remove null entries

         // Sort directors to ensure president comes first
         const sortedDirectors = [...parsedDirectors].sort((a, b) => {
          if (a.role.toLowerCase().includes('presidente') && !a.role.toLowerCase().includes('vice')) return -1;
          if (b.role.toLowerCase().includes('presidente') && !b.role.toLowerCase().includes('vice')) return 1;
          if (a.role.toLowerCase().includes('vice')) return 0;
          return 0;
        });

        setDirectors(sortedDirectors);

        // Fetch past players from CSV
        try {
          const pastPlayersResponse = await fetch('/jogadores-antigos.csv');
          const pastPlayersText = await pastPlayersResponse.text();

          // Parse past players CSV
          const pastPlayerLines = pastPlayersText.split('\n').filter(line => line.trim() !== '');
          const parsedPastPlayers = pastPlayerLines.map((line, index) => ({
            id: index + 1,
            name: line.trim()
          }));

          setPastPlayers(parsedPastPlayers);
        } catch (error) {
          console.error('Error loading past players:', error);
          setPastPlayers([]);
        }

      } catch (error) {
        console.error('Error loading data:', error);
        // Set default data if CSV loading fails
        setPlayers([]);
        setStaff([]);
        setDirectors([]);
        setPastPlayers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [sortPlayersByPosition]); // Keep sortPlayersByPosition here as it's defined outside but used inside

  const playerGroups = groupPlayersByPosition(players); // Call grouping functions here
  const directorGroups = groupDirectorsByRole(directors);

  // Image error handler
  const handleImageError = (e) => {
    e.target.onerror = null; // Prevent infinite loop if fallback fails
    e.target.src = '/images/player-silhouette.svg'; // Fallback to silhouette
  };

  if (loading) {
    return (
      <div className="team-page">
        <div className="container">
          <div className="loading">
            <i className="fas fa-spinner fa-spin mr-2"></i> Carregando informações do time...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="team-page">
      <div className="container">
        <div className="team-categories">
          <button 
            className={`category-button ${activeCategory === 'jogadores' ? 'active' : ''}`}
            onClick={() => setActiveCategory('jogadores')}
          >
            <i className="fas fa-futbol mr-2"></i> Jogadores
          </button>
          <button 
            className={`category-button ${activeCategory === 'comissao' ? 'active' : ''}`}
            onClick={() => setActiveCategory('comissao')}
          >
            <i className="fas fa-clipboard mr-2"></i> Comissão Técnica
          </button>
          <button 
            className={`category-button ${activeCategory === 'diretoria' ? 'active' : ''}`}
            onClick={() => setActiveCategory('diretoria')}
          >
            <i className="fas fa-user-tie mr-2"></i> Diretoria
          </button>
          <button 
            className={`category-button ${activeCategory === 'ex-jogadores' ? 'active' : ''}`}
            onClick={() => setActiveCategory('ex-jogadores')}
          >
            <i className="fas fa-history mr-2"></i> Ex-Jogadores
          </button>
        </div>

        {activeCategory === 'jogadores' && (
          <div className="players-section">
            {Object.entries(playerGroups).map(([position, positionPlayers]) => (
              <div key={position} className="position-group">
                <h2 className="position-title">{position}</h2>
                <div className="players-grid">
                  {positionPlayers.map(player => (
                    <div key={player.id} className="player-card" onClick={() => openLightbox(player)}>
                      <div className="player-image">
                        <img 
                          src={player.image} 
                          alt={player.name} 
                          onError={handleImageError}
                        />
                      </div>
                      <div className="player-card-body">
                        <h3>{player.name}</h3>
                        <p className="player-position">{player.position}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeCategory === 'comissao' && (
          <div className="staff-section">
            <h2 className="position-title">Comissão Técnica</h2>
            <div className="staff-grid">
              {staff.map(staffMember => (
                <div key={staffMember.id} className="staff-card" onClick={() => openLightbox(staffMember)}>
                  <div className="staff-image">
                    <img 
                      src={staffMember.image} 
                      alt={staffMember.name} 
                      onError={handleImageError}
                    />
                  </div>
                  <div className="staff-card-body">
                    <h3>{staffMember.name}</h3>
                    <p className="staff-position">{staffMember.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeCategory === 'diretoria' && (
          <div className="board-section">
            {Object.entries(directorGroups).map(([role, roleDirectors]) => (
              roleDirectors.length > 0 && (
                <div key={role} className="position-group">
                  <h2 className="position-title">{role}</h2>
                  <div className="board-grid">
                    {roleDirectors.map(director => (
                      <div key={director.id} className="board-card" onClick={() => openLightbox(director)}>
                        <div className="board-image">
                          <img 
                            src={director.image} 
                            alt={director.name} 
                            onError={handleImageError}
                          />
                        </div>
                        <div className="board-card-body">
                          <h3>{director.name}</h3>
                          <p className="board-position">{director.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            ))}
          </div>
        )}

        {activeCategory === 'ex-jogadores' && (
          <div className="past-players-section">
            <h2 className="position-title">Ex-Jogadores</h2>
            <div className="past-players-grid">
              {pastPlayers.map(player => (
                <div key={player.id} className="past-player-card" onClick={() => openLightbox(player)}>
                  <div className="past-player-image">
                    <img 
                      src={player.image} 
                      alt={player.name} 
                      onError={handleImageError}
                    />
                  </div>
                  <div className="past-player-card-body">
                    <h3>{player.name}</h3>
                    <p className="past-player-position">{player.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Lightbox Modal */}
        {showLightbox && selectedPerson && (
          <div className="lightbox-overlay" onClick={closeLightbox}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="lightbox-close" onClick={closeLightbox}>
                <i className="fas fa-times"></i>
              </button>
              <div className="lightbox-image-container">
                <img 
                  src={selectedPerson.image} 
                  alt={selectedPerson.name} 
                  onError={handleImageError}
                />
              </div>
              <div className="lightbox-details">
                <h2>{selectedPerson.name}</h2>
                <p>{selectedPerson.position || selectedPerson.role}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TimePage;
