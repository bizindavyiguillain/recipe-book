/* eslint-disable no-unused-vars */
import { loop } from 'redux-loop';
import type { Actions } from './actions.types';
import { cmdFetchRandom, cmdFetchRecipes } from './commands';
import { RecipesState } from './types';

const initialState: RecipesState = {
  recipes: [],
  selection: undefined,
  random: undefined,
};

export default (state: RecipesState, action: Actions) => {
  if (!state) return initialState;
  // ## HERE Q2 ## //
  switch (action.type) {
    case 'GET_ALL_RECIPES_REQUEST':
      return loop({ ...state }, cmdFetchRecipes());

    case 'GET_ALL_RECIPES_COMMIT':
      return { ...state, recipes: action.payload };

    case 'GET_One_RECIPES':
      return { ...state, selection: action.recipe };
  }
  // ## HERE Q4 ## //
  // ## HERE Q8 ## //
  // ## HERE Q11 ## //
  // ## HERE Q12 ## //
};

// ## HERE Q4 ## //
export const recipeSelector = (state: RecipesState) => {
  return state.recipes;
};
// ## HERE Q8 ## //

export const getRandomRecipe = (state: RecipesState) => state.random;

export const oneRecipeSelector = (state: RecipesState) => {
  return state.selection;
};
