import { Reciepe } from '../reciepe-book/reciepe-book.model';
import { Injectable } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingService } from '../shopping-list/shopping.service';

@Injectable()
export class RecipeService{

    constructor(private shoppingService : ShoppingService){}

    private reciepes:Reciepe[]=[
        new Reciepe('Sweet Kheer',
        'Made with milk and rice',
        'https://www.vegrecipesofindia.com/wp-content/uploads/2013/10/rice-kheer-recipe-2-500x375.jpg',
        [new Ingredients("Rice",2),new Ingredients("Milk",5)]),

        new Reciepe('A duplicate Sweet Kheer',
        'Made with milk and rice and dry fruits',
        'https://www.vegrecipesofindia.com/wp-content/uploads/2013/10/rice-kheer-recipe-2-500x375.jpg',
        [new Ingredients("Rice",2),new Ingredients("Milk",5)])
      ];

      getRecipes(){
          return this.reciepes.slice();
      }

      getSingleRecipeByIndex(index: number){
        return this.reciepes[index];
      }
      addIngredient(param : Ingredients[]){
        this.shoppingService.addIngredientsFromRecipeService(param);
      }
}