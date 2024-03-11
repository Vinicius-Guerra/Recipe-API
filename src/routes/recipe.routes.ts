import { Router } from "express";
import { RecipeControllers } from "../controllers/recipe.controllers";
import { IsRecipeIdValid } from "../middlewares/isRecipeIdValid.middleware";
import { BodyValidator } from "../middlewares/bodyValidator.middleware";
import { recipeCreateDataSchema, recipeUpdateDataSchema } from "../schemas/recipe.schema";

export const recipeRouter = Router();

const recipeControllers = new RecipeControllers();

recipeRouter.get("/", recipeControllers.getMany);
recipeRouter.get("/:id", IsRecipeIdValid.execute, recipeControllers.getOne);
recipeRouter.post(
   "/",
   BodyValidator.execute(recipeCreateDataSchema),
   recipeControllers.create
);
recipeRouter.patch(
   "/:id",
   BodyValidator.execute(recipeUpdateDataSchema),
   IsRecipeIdValid.execute,
   recipeControllers.update
);
recipeRouter.delete("/:id", IsRecipeIdValid.execute, recipeControllers.delete);