/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import ButtonRandom from './button';
import RecipeCard from './recipe-card';
import { Recipe } from '../types';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Recipes = () => {
  // ## HERE Q5 ## // Replace recipes variable
  const recipes: Recipe[] = [];
  React.useEffect(() => {
    // ## HERE Q6 ## //
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
