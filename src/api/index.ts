import recipes from './recipes';

export const getAllRecipes = () => recipes;

export const getRecipeById = (id: string) => recipes.find((r) => r.id === id);
