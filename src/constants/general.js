/* eslint-disable prettier/prettier */
import axios from 'axios';

axios.defaults.headers.get['X-RapidAPI-Key'] = '54a5bd1d40msh63f96a7890feffep18d839jsnb0b270034fa1';
axios.defaults.headers.get['X-RapidAPI-Host'] = 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com';

axios.defaults.baseURL = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com';

export default axios;

