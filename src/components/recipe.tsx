import { useAppSelector } from '../hooks';
import { oneRecipeSelector } from '../reducer';
import RecipeView from './views/recipe-view';

const Recipe = () => {
  // ## HERE Q9 ## // Replace recipe variable
  const recipe = useAppSelector(oneRecipeSelector);
  if (!recipe) return null;
  return <RecipeView recipe={recipe} />;
};

export default Recipe;
