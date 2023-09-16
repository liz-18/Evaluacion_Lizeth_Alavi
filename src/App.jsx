
import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar'; 
import Footer from './Footer'; 
import Home from './Home'; 
import DentistDetail from './DentistDetail'; 
import Contact from './Contact'; 
import Favorites from './Favorites'; 
import './styles-light.css'
import './styles-dark.css'
import './index.css'


const initialState = {
  theme: 'light', 
  apiData: null,
};

const actionTypes = {
  TOGGLE_THEME: 'TOGGLE_THEME',
  SET_API_DATA: 'SET_API_DATA',
};

const appReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    case actionTypes.SET_API_DATA:
      return {
        ...state,
        apiData: action.payload,
      };
    default:
      return state;
  }
};

const ContextGlobal = createContext();

const useAppContext = () => {
  return useContext(ContextGlobal);
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    
    fetch('tu_url_de_api')
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: actionTypes.SET_API_DATA, payload: data });
      })
      .catch((error) => {
        console.error('Error al cargar datos de la API', error);
      });
  }, []);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

function App() {
  return (
    <ContextProvider>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/dentist/:id" component={DentistDetail} />
            <Route path="/contacto" component={Contact} />
            <Route path="/favs" component={Favorites} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </ContextProvider>
  );
}

export default App;

