import React, {createContext, useEffect, useState} from 'react';
import {onAuthStateChanged} from 'firebase/auth';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [userId, setUserId] = useState(null);
  const [emplyObject, setEmplyObject] = useState(null);
  const [emplyFlag, setEmplyFlag] = useState(null);

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const storedUserId = await AsyncStorage.getItem('userId');
        if (storedUserId) {
          setUserId(storedUserId);
        }
      } catch (error) {
        console.error('Error fetching user ID:', error);
      }
    };
    fetchUserId();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        userId,
        setUserId,
        emplyObject,
        setEmplyObject,
        emplyFlag,
        setEmplyFlag,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
