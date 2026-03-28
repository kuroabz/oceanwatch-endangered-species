function SpeciesModal({ species, onClose }) {
  const getStatusClass = (status) => {
    if (status === "Critically Endangered") return "badge-critical";
    if (status === "Endangered") return "badge-endangered";
    return "badge-vulnerable";
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div style={{ position: 'relative' }}>
          <img src={species.image} alt={species.name} className="modal-image" />
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '60px 24px 24px',
            background: 'linear-gradient(transparent, rgba(0,0,0,0.7))'
          }}>
            <div style={{ marginBottom: '8px' }}>
              <span className={`badge ${getStatusClass(species.status)}`}>{species.status}</span>
              <span className="badge badge-category">{species.category}</span>
            </div>
            <h2 style={{ color: 'white', fontSize: '1.8rem', fontWeight: 600 }}>{species.name}</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontStyle: 'italic' }}>{species.scientificName}</p>
          </div>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        
        <div className="modal-body">
          <section style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '12px' }}>About</h3>
            <p style={{ color: '#4a5568', lineHeight: 1.7 }}>{species.fullDescription}</p>
          </section>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <span style={{ padding: '8px', background: '#e0f7fa', borderRadius: '8px' }}>📍</span>
              <div>
                <h4 style={{ fontWeight: 500, marginBottom: '4px' }}>Habitat</h4>
                <p style={{ color: '#64748b', fontSize: '0.9rem' }}>{species.habitat}</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <span style={{ padding: '8px', background: '#e3f2fd', borderRadius: '8px' }}>👥</span>
              <div>
                <h4 style={{ fontWeight: 500, marginBottom: '4px' }}>Population</h4>
                <p style={{ color: '#64748b', fontSize: '0.9rem' }}>{species.population}</p>
              </div>
            </div>
          </div>
          
          <section style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#f59e0b' }}>⚠️</span> Major Threats
            </h3>
            <ul style={{ paddingLeft: '20px', color: '#4a5568' }}>
              {species.threats.map((threat, i) => (
                <li key={i} style={{ marginBottom: '8px' }}>{threat}</li>
              ))}
            </ul>
          </section>
          
          <section>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#22c55e' }}>🛡️</span> Conservation Efforts
            </h3>
            <ul style={{ paddingLeft: '20px', color: '#4a5568' }}>
              {species.conservation.map((effort, i) => (
                <li key={i} style={{ marginBottom: '8px' }}>{effort}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default SpeciesModal;
