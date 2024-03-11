import express, { json } from "express";
import helmet from "helmet";
import { recipeRouter } from "./routes/recipe.routes";
import { HandleErrors } from "./errors/handleErrors";

export const app = express();

app.use(helmet());

app.use(json());

app.use("/recipes", recipeRouter);

app.use(HandleErrors.execute);
