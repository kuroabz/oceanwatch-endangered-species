import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#222f44', padding: '15px' }}> 

        <div style={{display: 'flex', justifyContent: 'center', gap: '30px'}}>
        
            <Link to="/Login" style={{ color: '#9af3ffff', textDecoration: 'none', fontSize: '1.2em' }}>Login</Link>

            <Link to="/Map" style={{ color: '#9af3ffff', textDecoration: 'none', fontSize: '1.2em' }}>Interactive Map</Link>

            <Link to="/DataReport" style={{ color: '#9af3ffff', textDecoration: 'none', fontSize: '1.2em' }}>Data Report</Link>

            <Link to="/Photo" style={{ color: '#9af3ffff', textDecoration: 'none', fontSize: '1.2em' }}>Photo Identifier</Link>

            <Link to="/BlogSection" style={{ color: '#9af3ffff', textDecoration: 'none', fontSize: '1.2em' }}>Blog</Link>
        
        </div>
    </nav>
  );
}

export default Navbar;

