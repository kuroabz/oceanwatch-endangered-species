function StatsSection({ species }) {
  const stats = {
    critical: species.filter(s => s.status === "Critically Endangered").length,
    endangered: species.filter(s => s.status === "Endangered").length,
    vulnerable: species.filter(s => s.status === "Vulnerable").length,
    total: species.length
  };

  return (
    <section style={{ maxWidth: '1200px', margin: '0 auto 32px', padding: '0 20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '24px', fontSize: '1.5rem', fontWeight: 600 }}>
        Conservation Statistics
      </h2>
      <div className="stats-grid">
        <div className="stat-card" style={{ background: '#fef2f2', borderLeft: '4px solid #ef4444' }}>
          <div className="stat-number" style={{ color: '#dc2626' }}>{stats.critical}</div>
          <div className="stat-label">Critically Endangered</div>
        </div>
        <div className="stat-card" style={{ background: '#fff7ed', borderLeft: '4px solid #f97316' }}>
          <div className="stat-number" style={{ color: '#ea580c' }}>{stats.endangered}</div>
          <div className="stat-label">Endangered</div>
        </div>
        <div className="stat-card" style={{ background: '#fefce8', borderLeft: '4px solid #eab308' }}>
          <div className="stat-number" style={{ color: '#ca8a04' }}>{stats.vulnerable}</div>
          <div className="stat-label">Vulnerable</div>
        </div>
        <div className="stat-card" style={{ background: '#ecfeff', borderLeft: '4px solid #06b6d4' }}>
          <div className="stat-number" style={{ color: '#0891b2' }}>{stats.total}</div>
          <div className="stat-label">Total Species</div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
