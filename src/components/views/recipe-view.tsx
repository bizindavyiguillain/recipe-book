import { Box, Table, Image, TableBody, TableCell, TableHeader, TableRow } from 'grommet';
import styled from 'styled-components';
import { Ingredient as IngredientType, Recipe } from '../../types';
import Ingredient from './ingredient';

const Container = styled.div`
  background-color: orange;
  border-radius: 30px;
  margin-top: 50px;
  display: flex;
  padding-top: 20px;
  flex-direction: column;
`;

const Body = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: orange;
  border-radius: 30px;
`;

const Ingredients = styled.div`
  margin: 10px 30px;
  width: 100%;
`;

const Description = styled.div`
  margin: 10px 30px;
  width: 100%;
`;

const Name = styled.h1`
  text-align: center;
`;

interface RecipeViewProps {
  recipe: Recipe;
}

const RecipeView = ({ recipe }: RecipeViewProps) => {
  return (
    <>
      {recipe && (
        <Container>
          <Name>{recipe.name}</Name>
          <Box height="small" width="small" alignSelf="center">
            <Image fit="cover" src={recipe.imageUrl} />
          </Box>
          <Body>
            <Ingredients>
              <h2>{'Ingredients :'}</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell scope="col" border="bottom">
                      <b>Name</b>
                    </TableCell>
                    <TableCell scope="col" border="bottom">
                      <b>Measure</b>
                    </TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recipe.ingredients.map((i: IngredientType) => (
                    <Ingredient {...i} key={i.name} />
                  ))}
                </TableBody>
              </Table>
            </Ingredients>
            <Description>
              <h2>{'Description :'}</h2>
              {recipe.description}
            </Description>
          </Body>
        </Container>
      )}
    </>
  );
};

export default RecipeView;
