/* eslint-disable prettier/prettier */
import auth from "@react-native-firebase/auth";
import React, { createContext, useState, useEffect, useContext } from "react";
import { AuthService } from "../services/auth-service";


const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [initializing, setInitializing] = useState(true);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const onAuthStateChanged = (user) => {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);
    
    if (initializing) return null;

    const loginUser = async (email, password) => {
        setLoading(true);
        const user = AuthService.loginUser(email, password);
        console.log(user);
        setLoading(false)
        setUser(user);
    }

    const registerUser = async (email, password) => {
        setLoading(true)
        const user = AuthService.registerUser(email, password);
        console.log(user);
        setLoading(false);
        setUser(user);
    }

    const logOut = async () => {
        const user = AuthService.logOut();
        setUser(user);
    }

    return (
        <AuthContext.Provider
          value={{
            user,
            loading,
            error,
            loginUser,
            registerUser,
            logOut,
          }}
        >
          {children}
        </AuthContext.Provider>
      );
}

const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

export { AuthProvider, useAuth };