import { TableCell, TableRow } from 'grommet';
import { Ingredient as IngredientType } from '../../types';

interface IngredientProps extends IngredientType {}

const Ingredient = ({ name, measure }: IngredientProps) => (
  <TableRow>
    <TableCell scope="col" border="bottom">
      {name}
    </TableCell>
    <TableCell scope="col" border="bottom">
      {measure}
    </TableCell>
  </TableRow>
);

export default Ingredient;
