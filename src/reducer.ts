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
  // ## HERE Q4 ## //
  // ## HERE Q8 ## //
  // ## HERE Q11 ## //
  // ## HERE Q12 ## //
};

// ## HERE Q4 ## //
// ## HERE Q8 ## //

export const getRandomRecipe = (state: RecipesState) => state.random;
