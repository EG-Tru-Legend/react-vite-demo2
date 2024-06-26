import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const AuthContext =  createContext(null);

export const AuthProvider = ({children}) => {
 // Initialisation -------------------------------------------
 // State ----------------------------------------------------
 const [loggedInUser, setloggedInUser] = useState(null);

 // Handlers -------------------------------------------------
 const login = (user) => setloggedInUser(user);
 const logout = () => setloggedInUser(null);

 // View -----------------------------------------------------
  return (
    <AuthContext.Provider value = {{ loggedInUser, login, logout }}>
        {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => useContext(AuthContext);