import React, { useState, useEffect, createContext } from "react";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [account, setAccount] = useState(false)
  
    const onLogin = (email, password) => {
      setIsLoading(true);
      loginRequest(email, password)
        .then((u) => {
          setUser(u);
          setIsLoading(false);
        })
        .catch((e) => {
          setIsLoading(false);
          setError(e);
        });
    };

    return (
        <AuthenticationContext.Provider
          value={{
            user,
            isLoading,
            error,
            onLogin,
            isAuthenticated,
            setIsAuthenticated,
            account,
            setAccount
          }}
        >
          {children}
        </AuthenticationContext.Provider>
      );
    };