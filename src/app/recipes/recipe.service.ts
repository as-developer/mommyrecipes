import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      "Big Mac XL",
      "Big Mac XL special for 50 year",
      "https://cdn.pixabay.com/photo/2015/12/08/00/26/food-1081707_960_720.jpg",
      [new Ingredient("Bacon Meat", 1), new Ingredient("Cheese slice", 2)]
    ),
    new Recipe(
      "Mommy burger",
      "Traditional homemade burger",
      "https://image.shutterstock.com/image-photo/two-homemade-beef-burgers-mushrooms-450w-1009968298.jpg",
      [new Ingredient("Beef Meat", 2), new Ingredient("Brocolli", 1)]
    )
  ];

  constructor() {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
