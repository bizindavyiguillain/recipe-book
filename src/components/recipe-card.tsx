/* eslint-disable no-unused-vars */
import { Box, Card, CardHeader, Image } from 'grommet';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks';
import { Recipe } from '../types';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const navigate = useNavigate();
  return (
    <Card
      height="medium"
      width="medium"
      background="orange"
      hoverIndicator="lightgrey"
      onClick={() => {
        // ## HERE Q10 ## //
        navigate('/recipe');
      }}
      pad="small"
      margin="small"
    >
      <CardHeader
        style={{ fontSize: 24 }}
        alignSelf="center"
        pad="medium"
      >{`${recipe.name}`}</CardHeader>
      <Box height="large" width="large">
        <Image fit="cover" src={recipe.imageUrl} />
      </Box>
    </Card>
  );
};

export default RecipeCard;
