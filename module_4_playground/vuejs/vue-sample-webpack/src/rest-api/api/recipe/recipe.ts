import { Recipe } from '../../model';
import { mockRecipes } from './mockData';

let recipes = mockRecipes;

export const fetchRecipes = (): Promise<Recipe[]> => {
  return new Promise(resolve => {
    setTimeout(() => resolve(recipes), 2000);
  }); 
};

export const fetchRecipeById = (id: number): Promise<Recipe> => {
  const recipe = recipes.find((r) => r.id === id);
  return new Promise(resolve => {
    setTimeout(() => resolve(recipe as Recipe), 2000);
  });
};

export const save = (recipe: Recipe): Promise<string> => {
  const index = recipes.findIndex((r) => r.id === recipe.id);

  return index >= 0 ?
    saveRecipeByIndex(index, recipe) :
    Promise.reject('Something was wrong saving recipe :(');
};

const saveRecipeByIndex = (index: number, recipe: Recipe): Promise<string> => {
  recipes = [
    ...recipes.slice(0, index),
    recipe,
    ...recipes.slice(index + 1),
  ];

  return new Promise(resolve => {
    setTimeout(() => resolve('Save recipe success'), 2000);
  });
};