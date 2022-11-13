import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { API_URL } from '../util/API';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user') || null)
  );

  const login = async (inputs) => {
    const res = await axios.post(`${API_URL}/auth/login`, inputs, {
      withCredentials: true,
      headers: {
        Accept: 'application/json',
      },
    });
    setCurrentUser(res.data);
  };

  const logout = async () => {
    await axios.get(`${API_URL}/auth/logout`, {
      withCredentials: true,
      headers: {
        Accept: 'application/json',
      },
    });
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
