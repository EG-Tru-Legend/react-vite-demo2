import { createContext, useContext, useState } from 'react';

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

export const useAuth = () => useContext(AuthContext);