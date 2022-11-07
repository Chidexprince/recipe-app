/* eslint-disable prettier/prettier */
import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// import { AuthenticationContext } from "../../services/authentication/authentication.context";

const FavouritesContext = createContext({});

const FavouritesProvider = ({ children }) => {
  //   const { user } = useContext(AuthenticationContext);

  useEffect(() => {
    if (favourites.length) {
      loadFavourites();
    }
  }, [favourites]);

  useEffect(() => {
    if (favourites.length) {
      saveFavourites(favourites);
    }
  }, [favourites]);

  const [favourites, setFavourites] = useState([]);

  const saveFavourites = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`favourites`, jsonValue);
    } catch (e) {
      console.log("Error: failed to store favourite", e);
    }
  };

  const loadFavourites = async () => {
    try {
      const value = await AsyncStorage.getItem(`favourites`);
      if (value !== null) {
        setFavourites(JSON.parse(value));
      }
    } catch (e) {
      console.log("Error: failed to load favourites", e);
    }
  };

  const addFavourites = (recipe) => {
    setFavourites([...favourites, recipe]);
  };

  const removeFavourites = (recipe) => {
    const newFavourites = favourites.filter((r) => r.id !== recipe.id);

    setFavourites(newFavourites);
  };

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addFavourites,
        removeFavourites,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

const useFavourite = () => {
    const context = useContext(FavouritesContext);
    if (!context) {
        throw new Error('useFavourite must be used within an FavouritesProvider');
    }
    return context;
}

export { FavouritesProvider, useFavourite };