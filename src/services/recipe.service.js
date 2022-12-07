/* eslint-disable prettier/prettier */
import axios from '../constants/general';

const getRecipes = async (recipe) => {
    const options = {
        method: 'GET',
        url: '/recipes/complexSearch',
        params: {
            name: recipe,
            instructionsRequired: 'true',
            addRecipeInformation: 'true'
        }
    }
    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const getRecipeById = async (recipeId) => {
    const options = {
        method: 'GET',
        url: `/recipes/${recipeId}/information`,
        params: {includeNutrition: 'true'},
    }
    try {
        const response = await axios.request(options);
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

        return response.data;
    } catch (error) {
        console.log(error);
    }
}


export const RecipeService = {
    getRecipes, getRecipeById, getRandomRecipe, getSimilarRecipes
}