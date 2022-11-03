/* eslint-disable prettier/prettier */
import React, {createContext, useState, useContext, useEffect} from 'react';

import { RecipeService } from '../services/recipe.service';

const RecipeContext = createContext({});



const RecipeProvider = ({children}) => { 
    const [recipes, setRecipes] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        getRecipes();
    }, [])

    const getRecipes = async () => {
        const recipeList = await RecipeService.getRecipes();
        console.log(recipeList);
        setLoading(false);
        setRecipes(recipeList.results);
    }

    return (
        <RecipeContext.Provider value={{recipes, loading}}>
            {children}
        </RecipeContext.Provider>
    );
}

const useRecipe = () => {
    const context = useContext(RecipeContext);
    if (!context) {
        throw new Error('useRecipe must be used within an RecipeProvider');
    }
    return context;
}

export { RecipeProvider, useRecipe };