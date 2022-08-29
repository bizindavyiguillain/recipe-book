/* eslint-disable no-unused-vars */
import { Recipe } from './types';

export type GetAllRecipesRequest = {
  type: 'GET_ALL_RECIPES_REQUEST';
  commit: GetAllRecipesCommit;
};

export type GetAllRecipesCommit = {
  type: 'GET_ALL_RECIPES_COMMIT';
  payload?: Recipe[];
};

// ## HERE Q10 SELECT ## //

export type GetRandomRecipeRequest = {
  type: 'GET_RANDOM_RECIPE_REQUEST';
  commit: GetRandomRecipeCommit;
};

export type GetRandomRecipeCommit = {
  type: 'GET_RANDOM_RECIPE_COMMIT';
  payload?: Recipe;
};

export type RequestAction = GetAllRecipesRequest | GetRandomRecipeRequest;

export type CommitAction = GetAllRecipesCommit | GetRandomRecipeCommit;

export type Actions = CommitAction | RequestAction;
