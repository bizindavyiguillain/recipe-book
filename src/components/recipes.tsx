/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import ButtonRandom from './button';
import RecipeCard from './recipe-card';
import { Recipe } from '../types';
import { recipeSelector } from '../reducer';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getAllRecipes } from '../actions';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Recipes = () => {
  // ## HERE Q5 ## // Replace recipes variable

  //useSelector
  //useDispatch
  const recipes: Recipe[] = useAppSelector(recipeSelector);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    // ## HERE Q6 ## //
    dispatch(getAllRecipes());
  }, []);
  return (
    <div>
      <ButtonRandom />
      <Container>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </Container>
    </div>
  );
};

export default Recipes;
