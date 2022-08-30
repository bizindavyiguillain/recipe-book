/* eslint-disable no-unused-vars */
import { GetAllRecipesCommit, GetAllRecipesRequest, GetOneRecipe } from './actions.types';
import { Recipe } from './types';

// ## HERE Q1 ## //    

export const getAllRecipes = (): GetAllRecipesRequest => {
  return { type: 'GET_ALL_RECIPES_REQUEST', commit: { type: 'GET_ALL_RECIPES_COMMIT' } };
};

export const getAllRecipesCommit = (payload: Recipe[]): GetAllRecipesCommit => {
  return { type: 'GET_ALL_RECIPES_COMMIT', payload };
};
// ## HERE Q7 ## //

export const getOneRecipes = (recipe: Recipe): GetOneRecipe => {
  return { type: 'GET_One_RECIPES', recipe };
};

// ## HERE Q11 ## //
