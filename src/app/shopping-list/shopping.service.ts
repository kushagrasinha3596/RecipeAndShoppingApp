import { Ingredients } from "../shared/ingredients.model";
import { EventEmitter } from '@angular/core';

export class ShoppingService{

  ingredientsChanged = new EventEmitter<Ingredients[]>();

   private ingredients : Ingredients[] = [
        new Ingredients('Apple',5),
        new Ingredients('Mango',10)
      ];

      getIngredients(){
        return this.ingredients;
      }

      addIngredients(ingredient: Ingredients){
        this.ingredients.push(ingredient);
        // When switching from the recipe details view to the shopping list view the component is destroyed and initialized anyway. 
        // Thus the direct notification of the other component is not required here. 
        // But it is a more generic approach which would work as well if both areas could be seen simultaneously, like it is the case with shopping edit and shopping list (where the event emission is required).
        //this.ingredientsChanged.emit(this.ingredients.slice());/
      }

      addIngredientsFromRecipeService(param : Ingredients[]){
        this.ingredients.push(...param);
         // When switching from the recipe details view to the shopping list view the component is destroyed and initialized anyway. 
        // Thus the direct notification of the other component is not required here. 
        // But it is a more generic approach which would work as well if both areas could be seen simultaneously, like it is the case with shopping edit and shopping list (where the event emission is required).
        //this.ingredientsChanged.emit(this.ingredients.slice());
      }
}