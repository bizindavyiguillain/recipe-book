import { Recipe } from '../types';

let recipes: Recipe[] = [
  {
    id: 'c125460c-e9fb-4c12-b192-eb5922b0e2b4',
    name: 'Poulet au maroilles',
    description:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    imageUrl: 'https://assets.afcdn.com/recipe/20191109/102126_w1024h576c1cx325cy244.jpg',
    ingredients: [
      {
        name: 'blanc de poulet',
        measure: '400g',
      },
      {
        name: 'creme',
        measure: '20cl',
      },
      {
        name: 'maroilles',
        measure: '100g',
      },
    ],
  },
  {
    id: '0fd588a2-9ef7-4b50-9e64-5a4ed0759615',
    name: 'Carbonnade flamande',
    description:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    imageUrl:
      'https://www.julieandrieu.com/media/cache/web_recipe_detail/uploads/2021/BH/mars/carbonnade_bh_mars.jpg',
    ingredients: [
      {
        name: 'boeuf bourgignon',
        measure: '800g',
      },
      {
        name: 'bière brune',
        measure: '100cl',
      },
      {
        name: 'oignon',
        measure: '100g',
      },
    ],
  },
];

export default recipes;
