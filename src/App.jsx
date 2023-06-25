import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Accueil from './Pages/Accueil';
import Portage_salarial from './Pages/Portage_salarial';
import Pour_qui from './Pages/Pour_qui';
import Avantage from './Pages/Avantage';
import Sentechs from './Pages/Sentechs';
import Ressources from './Pages/Ressources';
import Offre from './Pages/Offre';
import Outil from './Pages/Outil';


import "./App.css";



const App = () => {
  

  return (
      <div className='wrapper'> 
        <div className="Navbar">
          <Navbar />
        </div>
        <div className='container'>
          <Routes>
            <Route path="/sentechs" element={< Sentechs />} />
            <Route path="/" element={<Sentechs />} exact />
            <Route path="/portage_salarial" element={<Portage_salarial />} />
            <Route path="/pour_qui" element={<Pour_qui />} />
            <Route path="/avantage" element={<Avantage />} />
            <Route path="/offre" element={<Offre />} />
            <Route path="/ressources" element={< Ressources />} />
            <Route path="outil" element={<Outil />} />
          </Routes>
          
        </div>
      </div>
  
  );
}

export default App;
