/* eslint-disable prettier/prettier */
import React, {createContext, useState, useContext, useEffect} from 'react';

import { RecipeService } from '../services/recipe.service';

const RecipeContext = createContext({});

const RecipeProvider = ({children}) => {
    const [search, setSearch] = useState('');
    const [recipeId, setRecipeId] = useState(-1);
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [randomRecipe, setRandomRecipe] = useState([]);
    const [similarRecipes, setSimilarRecipes] = useState([]);

    useEffect(() => {
        getRandomRecipe();
        getSimilarRecipes();
    }, [])

    useEffect(() => {
        getRecipes();
    }, [search])

    const onSearch = (search) => {
        setLoading(true);
        setSearch(search)
    }

    const getRecipes = async () => {
        const recipeList = await RecipeService.getRecipes(search);
        console.log(recipeList);
        setLoading(false);
        setRecipes(recipeList.results);
    }

    const getRandomRecipe = async () => {
        const randomRecipe = await RecipeService.getRandomRecipe();
        setRandomRecipe(randomRecipe.recipes[0]);
    }

    const getSimilarRecipes = async () => {
        const similarRecipes = await RecipeService.getSimilarRecipes(recipeId);
        setSimilarRecipes(similarRecipes);
    }

    return (
        <RecipeContext.Provider value={{recipes, loading, search, randomRecipe, recipeId, similarRecipes, onSearch}}>
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