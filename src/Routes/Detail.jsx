import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../ContextGlobal'; 

import './styles-light.css'; 
const DentistDetail = () => {
  const { id } = useParams();
  const { state } = useAppContext(); 

  

  return (
    <div className={`container ${state.theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <h1>Dentist Detail</h1>
      <p>Theme: {state.theme}</p>
      {}
    </div>
  );
};

export default DentistDetail;
