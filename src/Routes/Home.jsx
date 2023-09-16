import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Components/Card';
import { useAppContext } from '../ContextGlobal'; 

import './styles-light.css'; 
import './styles-dark.css'; 
const Home = () => {
  const [dentists, setDentists] = useState([]);
  const { state } = useAppContext(); 

  useEffect(() => {
    
    const fakeDentists = [
      { id: 1, name: 'Dentist 1', email: 'dentist1@example.com', phone: '123-456-7890', website: 'https://www.example1.com' },
      { id: 2, name: 'Dentist 2', email: 'dentist2@example.com', phone: '987-654-3210', website: 'https://www.example2.com' },
      { id: 3, name: 'Dentist 3', email: 'dentist3@example.com', phone: '555-123-4567', website: 'https://www.example3.com' },
    ];

    setDentists(fakeDentists);
  }, []);

  return (
    <main className={`container ${state.theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <h1>Home</h1>
      <p>Theme: {state.theme}</p>
      <div className='card-grid'>
        {dentists.map((dentist) => (
          <Link to={`/dentist/${dentist.id}`} key={dentist.id}>
            <Card dentist={dentist} />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Home;
