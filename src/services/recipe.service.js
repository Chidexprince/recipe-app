/* eslint-disable prettier/prettier */
import axios from '../constants/general';

const getRecipes = async (recipe) => {
    const options = {
        method: 'GET',
        url: '/recipes/complexSearch',
        params: {
            query: recipe,
            instructionsRequired: 'true',
            addRecipeInformation: 'true'
        }
    }
    try {
        const response = await axios.request(options);
        console.log(response.data);

        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const getRandomRecipe = async () => {
    const options = {
        method: 'GET',
        url: '/recipes/random',
    }
    try {
        const response = await axios.request(options);
        console.log(response.data);

        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const getSimilarRecipes = async (recipeId) => {
    const options = {
        method: 'GET',
        url: `/recipes/${recipeId}/similar`,
    }
    try {
        const response = await axios.request(options);
        console.log(response.data);

        return response.data;
    } catch (error) {
        console.log(error);
    }
}


export const RecipeService = {
    getRecipes, getRandomRecipe, getSimilarRecipes
}