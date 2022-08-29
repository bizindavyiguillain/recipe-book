export type Ingredient = {
  name: string;
  measure: string;
};

export type Recipe = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  ingredients: Ingredient[];
};

export interface RecipesState {
  recipes: Recipe[];
  selection: undefined | Recipe;
  random: undefined | Recipe;
}
