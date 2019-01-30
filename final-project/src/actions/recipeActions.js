import { FETCH_RECIPES, NEW_RECIPE } from './types';

export const fetchRecipes = () => dispatch => {
  dispatch({
    type: FETCH_RECIPES,
    payload: [
      {
        name: 'Spur Wings Recipe',
        id: 1,
        time: 120,
        description: 'A delicious recipe that emulates Spur\'s famous wings!',
        instructions: 'Mix the food',
        created: new Date().toLocaleDateString('en-US'),
        images: ['https://www.bbcgoodfood.com/sites/default/files/guide/guide-image/2018/06/chicken-wings-main.jpg'],
        createdBy: 'Eckhardt'
      },
      {
        name: 'Spur Wings Recipe',
        id: 2,
        time: 120,
        description: 'A delicious recipe that emulates Spur\'s famous wings!',
        instructions: 'Mix the food',
        created: new Date().toLocaleDateString('en-US'),
        images: ['https://www.bbcgoodfood.com/sites/default/files/guide/guide-image/2018/06/chicken-wings-main.jpg'],
        createdBy: 'Eckhardt'
      },
      {
        name: 'Spur Wings Recipe',
        id: 3,
        time: 120,
        description: 'A delicious recipe that emulates Spur\'s famous wings!',
        instructions: 'Mix the food',
        created: new Date().toLocaleDateString('en-US'),
        images: ['https://www.bbcgoodfood.com/sites/default/files/guide/guide-image/2018/06/chicken-wings-main.jpg'],
        createdBy: 'Eckhardt'
      },
      {
        name: 'Spur Wings Recipe',
        id: 4,
        time: 120,
        description: 'A delicious recipe that emulates Spur\'s famous wings!',
        instructions: 'Mix the food',
        created: new Date().toLocaleDateString('en-US'),
        images: ['https://www.bbcgoodfood.com/sites/default/files/guide/guide-image/2018/06/chicken-wings-main.jpg'],
        createdBy: 'Eckhardt'
      },
      {
        name: 'Spur Wings Recipe',
        id: 5,
        time: 120,
        description: 'A delicious recipe that emulates Spur\'s famous wings!',
        instructions: 'Mix the food',
        created: new Date().toLocaleDateString('en-US'),
        images: ['https://www.bbcgoodfood.com/sites/default/files/guide/guide-image/2018/06/chicken-wings-main.jpg'],
        createdBy: 'Eckhardt'
      }
    ]
  })
};

export const createRecipe = recipeData => dispatch => {
    dispatch({
      type: NEW_RECIPE,
      payload: recipeData
    })
};