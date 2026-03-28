import React, { useState,} from 'react';

function Identify() {
  const [currentImage, setCurrentImage] = useState(null);
  const [currentName, setCurrentName] = useState("");


  


  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
   
      setCurrentImage(URL.createObjectURL(file));
      
     
      const animals = ["Blue Whale!"];
      setCurrentName(animals);
    }
  };



  return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'Arial' }}>
      
 
      <div style={{ borderBottom: '2px solid #ccc', paddingBottom: '30px', marginBottom: '30px' }}>
        <h2>📸 New Sighting</h2>
        
 
        <input type="file" accept="image/*" onChange={handleUpload} />

        {currentImage && (
          <div style={{ marginTop: '20px' }}>
            <img src={currentImage} alt="Preview" style={{ width: '200px', borderRadius: '10px' }} />
            <h3>It's a: <span style={{ color: 'green' }}>{currentName}</span></h3>
            
            
          </div>
        )}
      </div>

     
      
      

    </div>
  );
}

export default Identify;