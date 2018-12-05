import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
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

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
}
