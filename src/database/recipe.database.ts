import { TRecipe } from "../interfaces/recipe.interface";

let id = 0;

export const recipeDatabase: TRecipe[]  = [];

export const generateId = () => {
    id++;
    return id;
}