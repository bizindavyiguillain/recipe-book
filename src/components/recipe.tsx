import RecipeView from './views/recipe-view';

const Recipe = () => {
  // ## HERE Q9 ## // Replace recipe variable
  const recipe: any = undefined;
  if (!recipe) return null;
  return <RecipeView recipe={recipe} />;
};

export default Recipe;
