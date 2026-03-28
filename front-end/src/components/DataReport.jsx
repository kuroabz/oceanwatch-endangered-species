import { Link } from 'react-router-dom'

export default function DataReport() {

    return (
        <>
        <div className="data-report-container">
            <h3>Do you want to report an incident or view an incident report</h3>
            <div className="button-row">
                <Link to="/report-incident">
                <button>Report Incident</button>
                </Link>
                <Link to="/view-report">
                <button>View Incident Report</button>
                </Link>
            </div>
        </div>    
        </>

    )
}