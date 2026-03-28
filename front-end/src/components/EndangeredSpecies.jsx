import { useState, useMemo, useEffect } from 'react';
import SpeciesCard from './SpeciesCard';
import SpeciesModal from './SpeciesModal';
import StatsSection from './StatsSection';

import seaTurtleImg from '../assets/seaturtle.png';
import blueWhaleImg from '../assets/blue_whale.png';
import hammerheadImg from '../assets/hammerhead shark.png';
import coralReefImg from '../assets/coral reef.png';
import seaOtterImg from '../assets/sea_otter_floating.png';
import mantaRayImg from '../assets/manta_ray.png';

const imageMap = {
  'seaturtle.png': seaTurtleImg,
  'blue_whale.png': blueWhaleImg,
  'hammerhead shark.png': hammerheadImg,
  'coral reef.png': coralReefImg,
  'sea_otter_floating.png': seaOtterImg,
  'manta_ray.png': mantaRayImg,
};

const categories = ["All", "Mammals", "Fish", "Reptiles", "Invertebrates"];

function EndangeredSpecies() {
  const [species, setSpecies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("name");
  const [selectedSpecies, setSelectedSpecies] = useState(null);
  const [showStats, setShowStats] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8081/api/species")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch species data");
        return res.json();
      })
      .then((data) => {
        const mapped = data.map((s) => ({
          ...s,
          image: imageMap[s.image] || s.image,
        }));
        setSpecies(mapped);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const filteredSpecies = useMemo(() => {
    let result = [...species];
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(s =>
        s.name.toLowerCase().includes(query) ||
        s.scientificName.toLowerCase().includes(query) ||
        s.description.toLowerCase().includes(query) ||
        s.status.toLowerCase().includes(query)
      );
    }
    if (selectedCategory !== "All") {
      result = result.filter(s => s.category === selectedCategory);
    }
    result.sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "status") {
        const order = { "Critically Endangered": 0, "Endangered": 1, "Vulnerable": 2 };
        return order[a.status] - order[b.status];
      }
      return a.region.localeCompare(b.region);
    });
    return result;
  }, [searchQuery, selectedCategory, sortBy, species]);

  const inputStyle = {
    width: '100%', maxWidth: '600px', padding: '16px 24px', fontSize: '16px',
    border: '2px solid #4dd0e1', borderRadius: '12px', outline: 'none',
    background: 'rgba(255,255,255,0.1)', color: 'white'
  };

  const filterBtnStyle = (isActive) => ({
    padding: '8px 16px', border: '2px solid #4dd0e1',
    background: isActive ? '#0891b2' : 'transparent',
    color: 'white', borderRadius: '8px', cursor: 'pointer', fontSize: '0.9rem'
  });

  if (loading) {
    return (
      <div style={{ padding: '40px 20px', minHeight: '100vh', textAlign: 'center' }}>
        <p style={{ color: '#9af3ff', fontSize: '1.2rem', marginTop: '80px' }}>
          Loading species data...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: '40px 20px', minHeight: '100vh', textAlign: 'center' }}>
        <p style={{ color: '#ff6b6b', fontSize: '1.1rem', marginTop: '80px' }}>Error: {error}</p>
        <p style={{ color: '#9af3ff', marginTop: '8px' }}>Make sure the Spring Boot backend is running on port 8081.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '40px 20px', minHeight: '100vh' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, color: '#4dd0e1', marginBottom: '16px' }}>
          Endangered Marine Species
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#9af3ff', maxWidth: '600px', margin: '0 auto' }}>
          Protecting Ocean Biodiversity for Future Generations
        </p>
      </header>

      <div style={{ maxWidth: '700px', margin: '0 auto 32px' }}>
        <input type="search" placeholder="Search species by name, habitat, or status..."
          value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} style={inputStyle} />
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto 24px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
            <span style={{ color: '#9af3ff', fontSize: '0.9rem' }}>Filter:</span>
            {categories.map(cat => (
              <button key={cat} style={filterBtnStyle(selectedCategory === cat)} onClick={() => setSelectedCategory(cat)}>
                {cat}
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <button style={filterBtnStyle(showStats)} onClick={() => setShowStats(!showStats)}>Statistics</button>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}
              style={{ padding: '8px 12px', borderRadius: '8px', border: '2px solid #4dd0e1', fontSize: '0.9rem', background: '#1a3a4a', color: 'white' }}>
              <option value="name">Sort: Alphabetical</option>
              <option value="status">Sort: Threat Level</option>
              <option value="region">Sort: Region</option>
            </select>
          </div>
        </div>
      </div>

      {showStats && <StatsSection species={species} />}

      <div style={{ maxWidth: '1200px', margin: '0 auto', paddingBottom: '16px' }}>
        <p style={{ color: '#9af3ff', fontSize: '0.9rem' }}>
          Showing {filteredSpecies.length} of {species.length} species
        </p>
      </div>

      <main style={{ maxWidth: '1200px', margin: '0 auto', paddingBottom: '60px' }}>
        {filteredSpecies.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px' }}>
            <h2 style={{ color: 'white', marginBottom: '8px' }}>No species found</h2>
            <p style={{ color: '#9af3ff' }}>Try adjusting your search or filters</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
            {filteredSpecies.map((s, index) => (
              <SpeciesCard key={s.id} species={s} index={index} onLearnMore={() => setSelectedSpecies(s)} />
            ))}
          </div>
        )}
      </main>

      {selectedSpecies && (
        <SpeciesModal species={selectedSpecies} onClose={() => setSelectedSpecies(null)} />
      )}
    </div>
  );
}

export default EndangeredSpecies;
