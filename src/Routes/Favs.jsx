import React, { useContext } from 'react';
import { useAppContext } from '../ContextGlobal'; 
import Card from '../Components/Card';

import './styles-light.css';
import './styles-dark.css'; 

const Favs = () => {
  
  const { state } = useAppContext();

  
  const favoriteDentists = state.apiData?.favorites || [];

  return (
    <main className={`container ${state.theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favoriteDentists.map((favoriteDentist) => (
          <Card key={favoriteDentist.id} dentist={favoriteDentist} />
        ))}
      </div>
    </main>
  );
};

export default Favs;
