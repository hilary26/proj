import React, { useState, createContext } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../config';

export const ManContext = createContext();
                                                                                     
export const ManProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const manage = async ({ FullName, YourLocation, Email, Gender, Complaints }) => {
    setIsLoading(true);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    };

    try {
      const response = await axios.post(
        `${BASE_URL}/manage`,
        { FullName, YourLocation, Email, Gender, Complaints },
        requestOptions
      );

      if (response.data) {
        setUserInfo(response.data);
      } else {
        console.error('Response data is missing or empty!');
      }
    } catch (error) {
      console.error('Error during complaints request:', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ManContext.Provider value={{ isLoading, userInfo, manage }}>
      {children}
    </ManContext.Provider>
  );
};