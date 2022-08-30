/* eslint-disable no-unused-vars */
import { Cmd } from 'redux-loop';
import { GetAllRecipesRequest, GetRandomRecipeRequest } from './actions.types';
import { getAllRecipes } from './api';
import { Ingredient, Recipe } from './types';
import { v1 as uuid } from 'uuid';
import recipes from './api/recipes';
import { getAllRecipesCommit } from './actions';

export const cmdFetchRecipes = () =>
  // ## HERE Q3 ## //
  Cmd.run(
    () => {
      return getAllRecipes();
    },
    {
      successActionCreator: (payload) => {
        return getAllRecipesCommit(payload);
      },
    },
  );

export const cmdFetchRandom = (action: GetRandomRecipeRequest) =>
  Cmd.run(
    () => {
      return fetch('https://www.themealdb.com/api/json/v1/1/random.php', {
        method: 'GET',
      })
        .then(checkStatus)
        .then((response) => response.json());
      // ## HERE Q12 ## //
    },
    // ## HERE Q12 ## //
  );

const checkStatus = (response: Response) => {
  if (response.ok) return response;
  throw new Error(response.statusText);
};

const parseRecipe = (response: { meals: Array<any> }): Promise<Recipe> => {
  if (!response) return Promise.reject('Parsing JSON failed.');
  const randomRecipe = response.meals[0];
  // ## HERE Q13 ## //
  const recipe: Recipe = {
    id: '',
    description: '',
    ingredients: parseIngredients(randomRecipe),
    name: '',
    imageUrl: '',
  };
  return Promise.resolve(recipe);
};

// ## HELPERS ##
const parseIngredients = (random: any): Ingredient[] => {
  let i = 1;
  let ingredients: Ingredient[] = [];
  let parsed = parseIngredient(random[`strIngredient${i}`], random[`strMeasure${i}`]);
  while (parsed || i <= 20) {
    if (parsed) ingredients = [...ingredients, parsed];
    i += 1;
    parsed = parseIngredient(random[`strIngredient${i}`], random[`strMeasure${i}`]);
  }
  return ingredients;
};

const parseIngredient = (ingredient: string, measure: string): Ingredient | null => {
  if (!ingredient) return null;
  return {
    name: ingredient,
    measure,
  };
};
