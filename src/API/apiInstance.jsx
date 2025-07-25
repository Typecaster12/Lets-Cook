import axios from "axios";
const Api = axios.create({
    //this is the baseURl;
    baseURL: "https://www.themealdb.com",
});


//get method, to get the foods from given country;
//the input value = countryName;
export const getFoodsByRegion = (countryName) => {
    return Api.get(`/api/json/v1/1/filter.php?a=${countryName}`);
}

//for dynamic routing using id from region.jsx;
export const getFoodById = (mealId) => {
    return Api.get(`api/json/v1/1/lookup.php?i=${mealId}`);
}

//get request using name of the dish;
export const getFoodByName = (foodName) => {
    return Api.get(`/api/json/v1/1/search.php?s=${foodName}`);
}

//get request, to get meals and their recipies by just ingredionts;
export const getFoodByIng = (ingName) => {
    return Api.get(`/api/json/v1/1/filter.php?i=${ingName}`);
}

//get request, for dynamic routing from ingCards.jsx by id of meals;
export const getFoodIngById = (foodId) => {
    return Api.get(`api/json/v1/1/lookup.php?i=${foodId}`);
}