import { z } from "zod";
import { recipeCreateDataSchema, recipeSchema, recipeUpdateDataSchema } from "../schemas/recipe.schema";

export type TRecipe = z.infer<typeof recipeSchema>;
export type TRecipeCreateData = z.infer<typeof recipeCreateDataSchema>;
export type TRecipeUpdateData = z.infer<typeof recipeUpdateDataSchema>;