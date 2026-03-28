function SpeciesCard({ species, index, onLearnMore }) {
  const getStatusClass = (status) => {
    if (status === "Critically Endangered") return "badge-critical";
    if (status === "Endangered") return "badge-endangered";
    return "badge-vulnerable";
  };

  return (
    <article
      className="species-card"
      style={{
        animation: `fadeInUp 0.5s ease forwards`,
        animationDelay: `${index * 100}ms`,
        opacity: 0
      }}
    >
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
      
      <div style={{ overflow: 'hidden' }}>
        <img src={species.image} alt={`${species.name} - Endangered marine species`} />
      </div>
      
      <div className="card-content">
        <div style={{ marginBottom: '12px' }}>
          <span className={`badge ${getStatusClass(species.status)}`}>
            {species.status}
          </span>
          <span className="badge badge-category">{species.category}</span>
        </div>
        
        <h2 className="species-name">{species.name}</h2>
        <p className="scientific-name">{species.scientificName}</p>
        <p className="description">{species.description}</p>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', color: '#64748b', fontSize: '0.85rem' }}>
          <span>📍</span>
          <span>{species.habitat}</span>
        </div>
        
        <button className="btn-primary" onClick={onLearnMore}>
          Learn More
          <span>→</span>
        </button>
      </div>
    </article>
  );
}

export default SpeciesCard;
