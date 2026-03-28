import { useState } from "react"

export default function ViewReport({ incidents }) {

    const [filterType, setFilterType] = useState("");
    const [searchTitle, setSearchTitle] = useState("");

    const filteredIncidents = incidents.filter(incident => {
        const matchesType = !filterType || incident.incidenttype === filterType;
        const matchesTitle = !searchTitle || incident.incidenttitle.toLowerCase().includes(searchTitle.toLowerCase());
        return matchesType && matchesTitle;
    });

    return (
        <div className="view-report-container">
            <h2>View Incident Reports</h2>

            {/*These are the filters*/}
            <div className="filters">
                <select value={filterType} onChange={(e) => setFilterType(e.target.value)} >
                    <option value="">All Incident Types</option>
                    <option value="Collision of Vessel">Collision of Vessel</option>
                    <option value="Collision with a fixed object">Collision with a fixed object</option>
                    <option value="ollision with a floating object">Collision with a floating object</option>
                    <option value="Structural Failure">Structural Failure</option>
                    <option value="Fire">Fire</option>
                    <option value="Explosion">Explosion</option>
                    <option value="Littering">Littering</option>
                </select>

                <input type="text" placeholder="Search by name" value={searchTitle} onChange={(e) => setSearchTitle(e.target.value)} />

            </div>

        <div className="incidents-list">
            {filteredIncidents.length === 0 ?
            (<p>No incidents match your filters</p>) : (
                filteredIncidents.map((incident) => (
                    <div key={incident.id} className="incident-card">
                        <h3>{incident.fullname}</h3>
                        <div className="incident-details">
                            <p><strong>Type:</strong> {incident.incidenttype}</p>
                            <p><strong>Date:</strong> {incident.date}</p>
                            <p><strong>Location:</strong> {incident.locationtype}</p>
                            <p><strong>Severity:</strong> {incident.severity}</p>
                        </div>
                        <button className="download-btn">
                            Download Report
                        </button>
                    </div>    
                ))
            )}
            </div>
        </div>
    );
}