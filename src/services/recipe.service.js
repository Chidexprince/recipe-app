/* eslint-disable prettier/prettier */
import axios from '../constants/general';

const getRecipes = async () => {
    const options = {
        method: 'GET',
        url: '/recipes/complexSearch',
        params: {
            query: 'pasta',
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


export const RecipeService = {
    getRecipes
}