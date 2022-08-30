import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Random from './random';
import Recipe from './recipe';
import Recipes from './recipes';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Recipes />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/random" element={<Random />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
