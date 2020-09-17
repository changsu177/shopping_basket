import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import {Recipe} from './recipe.model';

@Injectable()
export class RecipeService {
    recipeSelected = new Subject<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', [ new Ingredient("burger", 2 ) ]),
        new Recipe('Another Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',  [ new Ingredient("apple", 2 ) ])
    ];

    constructor( private  shoppingListServer : ShoppingListService ) {

    }

    getRecipes () {
        return this.recipes.slice();  // return the copy of the recipe
    }

    getRecipe( index :number ) {
        return this.recipes[index];

    }

    addToList( ingredients : Ingredient[]) {
        this.shoppingListServer.addIngredients(ingredients);

    }
}

