import { generateId, recipeDatabase } from "../database/recipe.database";
import { TRecipe, TRecipeCreateData, TRecipeUpdateData } from "../interfaces/recipe.interface";

export class RecipeService{
    getMany(search?: string): TRecipe[] {
        if(search) {
            const searchResults = recipeDatabase.filter((recipe) => 
            recipe.title.toLowerCase().includes(search.toLowerCase())
            );

            return searchResults;
        } else {
            return recipeDatabase;
        }
    }

    getOne(recipe: TRecipe): TRecipe {
        return recipe;
    }

    create(body: TRecipeCreateData): TRecipe {
        const newRecipe: TRecipe = {
            id: generateId(),
            title: body.title,
            content: body.content,
            steps: body.steps,
        };

        recipeDatabase.push(newRecipe);

        return newRecipe;
    }

    update(currentRecipe: TRecipe, body: TRecipeUpdateData): TRecipe {     
        const updatedRecipe = { ...currentRecipe, ...body };
  
        const index = recipeDatabase.findIndex((recipe) => recipe.id === currentRecipe.id);
  
        recipeDatabase.splice(index, 1, updatedRecipe);
  
        return updatedRecipe;
     }

     delete(id: number): void {
        const index = recipeDatabase.findIndex((recipe) => recipe.id === id);
  
        recipeDatabase.splice(index, 1);
     }
}