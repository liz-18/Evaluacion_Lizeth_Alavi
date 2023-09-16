import React from 'react';
import { useAppContext } from '../ContextGlobal'; 

const Navbar = () => {
  const { state, dispatch } = useAppContext(); 

  
  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' }); 
  };

  return (
    <nav className={`navbar ${state.theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      {}
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/favs">Favs</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      {}
      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  );
};

export default Navbar;
