
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [emplyObject, setEmplyObject] = useState(null);

  return (
    <AuthContext.Provider value={{ userId, setUserId, emplyObject, setEmplyObject }}>
      {children}
    </AuthContext.Provider>
  );
};
