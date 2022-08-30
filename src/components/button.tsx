import { Button } from 'grommet';
import { useNavigate } from 'react-router-dom';

const ButtonRandom = () => {
  const navigate = useNavigate();
  return (
    <Button
      color="lightgrey"
      primary
      label="Get random recipe !"
      onClick={() => {
        navigate('/random');
        // ## HERE Q14 ## //
      }}
    />
  );
};

export default ButtonRandom;
