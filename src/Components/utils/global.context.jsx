import './styles-light.css'; 
import './styles-dark.css';
import React, { createContext, useContext, useReducer, useEffect } from 'react';


const initialState = {
  theme: 'light', 
  apiData: {
    dentists: [], 
    favorites: [], 
  },
};


const actionTypes = {
  TOGGLE_THEME: 'TOGGLE_THEME',
  SET_API_DATA: 'SET_API_DATA',
  ADD_TO_FAVORITES: 'ADD_TO_FAVORITES',
  REMOVE_FROM_FAVORITES: 'REMOVE_FROM_FAVORITES',
};


const appReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_THEME:
     
      const newTheme = state.theme === 'light' ? 'dark' : 'light';

      
      localStorage.setItem('theme', newTheme);

      return {
        ...state,
        theme: newTheme,
      };
    case actionTypes.SET_API_DATA:
      
      return {
        ...state,
        apiData: { ...state.apiData, dentists: action.payload },
      };
    case actionTypes.ADD_TO_FAVORITES:
     
      return {
        ...state,
        apiData: {
          ...state.apiData,
          favorites: [...state.apiData.favorites, action.payload],
        },
      };
    case actionTypes.REMOVE_FROM_FAVORITES:
      
      return {
        ...state,
        apiData: {
          ...state.apiData,
          favorites: state.apiData.favorites.filter(
            (dentist) => dentist.id !== action.payload
          ),
        },
      };
    default:
      return state;
  }
};


export const ContextGlobal = createContext();


export const useAppContext = () => {
  return useContext(ContextGlobal);
};


export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  
  useEffect(() => {
    setTimeout(() => {
      
      const apiData = [
        {
          id: 1,
          name: 'Ejemplo de datos de la API',
          username: 'example1',
        },
        
      ];
      dispatch({ type: actionTypes.SET_API_DATA, payload: apiData });
    }, 2000);
  }, []);

  const themeClass = state.theme === 'light' ? 'light-theme' : 'dark-theme';

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      <div className={themeClass}>{children}</div>
    </ContextGlobal.Provider>
  );
};


