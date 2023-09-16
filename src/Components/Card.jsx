import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal, actionTypes } from '../ContextGlobal'; 
const Card = ({ name, username, id }) => {
  const { state, dispatch } = useContext(ContextGlobal); 

  const isFavorite = state.apiData.favorites.some((favorite) => favorite.id === id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      
      dispatch({ type: actionTypes.REMOVE_FROM_FAVORITES, payload: id });

      
      const updatedFavorites = state.apiData.favorites.filter((dentist) => dentist.id !== id);
      localStorage.setItem('favoriteDentists', JSON.stringify(updatedFavorites));
    } else {
      
      const dentist = { id, name, username };
      dispatch({ type: actionTypes.ADD_TO_FAVORITES, payload: dentist });

      
      const updatedFavorites = [...state.apiData.favorites, dentist];
      localStorage.setItem('favoriteDentists', JSON.stringify(updatedFavorites));
    }
  };

  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Username: {username}</p>
      <p>ID: {id}</p>
      <Link to={`/dentist/${id}`}>Ver detalles</Link>
      <button onClick={handleToggleFavorite} className="favButton">
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default Card;
