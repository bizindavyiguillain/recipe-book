/* eslint-disable no-unused-vars */
import { GetAllRecipesCommit, GetAllRecipesRequest } from './actions.types';
import { Recipe } from './types';

// ## HERE Q1 ## //

export const getAllRecipes = (): GetAllRecipesRequest => {
  return { type: 'GET_ALL_RECIPES_REQUEST', commit: { type: 'GET_ALL_RECIPES_COMMIT' } };
};

export const getAllRecipesCommit = (payload: Recipe[]): GetAllRecipesCommit => {
  return { type: 'GET_ALL_RECIPES_COMMIT', payload };
};
// ## HERE Q7 ## //

// ## HERE Q11 ## //
