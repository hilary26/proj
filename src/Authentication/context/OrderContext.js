import React, { useState, createContext } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../config';

export const OrdContext = createContext();

export const OrderProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const order = async ({ FullName, YourGoods, Amount, state, address }) => {
    setIsLoading(true);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    };

    try {
      const response = await axios.post(
        `${BASE_URL}/order`,
        { FullName, YourGoods, Amount, state, address },
        requestOptions
      );

      if (response.data) {
        setUserInfo(response.data);
      } else {
        console.error('Response data is missing or empty!');
      }
    } catch (error) {
      console.error('Error during order request:', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <OrdContext.Provider value={{ isLoading, userInfo, order }}>
      {children}
    </OrdContext.Provider>
  );
};