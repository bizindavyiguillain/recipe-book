import { useAppSelector } from '../hooks';
import { getRandomRecipe } from '../reducer';
import ButtonRandom from './button';
import RecipeView from './views/recipe-view';

const Random = () => {
  const recipe = useAppSelector(getRandomRecipe);
  if (!recipe) return <ButtonRandom />;
  return (
    <>
      <ButtonRandom />
      <RecipeView recipe={recipe} />
    </>
  );
};

export default Random;
