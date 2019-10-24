import { Reciepe } from '../reciepe-book/reciepe-book.model';
import { Injectable } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingService } from '../shopping-list/shopping.service';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class RecipeService{

    recipesChanged = new Subject<Reciepe[]>();

    // private reciepes:Reciepe[]=[
    //     new Reciepe('Sweet Kheer',
    //     'Made with milk and rice',
    //     'https://www.vegrecipesofindia.com/wp-content/uploads/2013/10/rice-kheer-recipe-2-500x375.jpg',
    //     [new Ingredients("Rice",2),new Ingredients("Milk",5)]),

    //     new Reciepe('A duplicate Sweet Kheer',
    //     'Made with milk and rice and dry fruits',
    //     'https://www.vegrecipesofindia.com/wp-content/uploads/2013/10/rice-kheer-recipe-2-500x375.jpg',
    //     [new Ingredients("Rice",2),new Ingredients("Milk",5)])
    //   ];

    private reciepes: Reciepe[] = [];

      constructor(private shoppingService : ShoppingService,
        private http: HttpClient){
        console.log("Constructor of RecipeService");
      }
      
      storeRecipeToDatabaseServer(){
        return this.http.put("https://recipeandshopping-recipebook.firebaseio.com/recipe.json", this.reciepes);
      }

      fetchRecipeFromDatabaseServer(){
        return this.http.get<Reciepe[]>('https://recipeandshopping-recipebook.firebaseio.com/recipe.json')
        .pipe(map((data : Reciepe[])=>{
          return data.map((recipe)=>{
            var obj = {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : []
            };
            return obj;
          });  
        }),
        tap((recipe: Reciepe[])=>{
          this.iniTializeRecipeArray(recipe);
        }));
      }

      iniTializeRecipeArray(recipe: Reciepe[]){
        this.reciepes = recipe;
        this.recipesChanged.next(this.reciepes.slice());
      }
      getRecipes(){
          return this.reciepes.slice();
      }

      populateRecipeFromServer(param){
        this.reciepes = param;
        this.recipesChanged.next(this.reciepes.slice());
      }

      getSingleRecipeByIndex(index: number){
        return this.reciepes[index];
      }
      addIngredient(param : Ingredients[]){
        this.shoppingService.addIngredientsFromRecipeService(param);
      }

      addRecipe(newRecipe: Reciepe){
        this.reciepes.push(newRecipe);
        this.recipesChanged.next(this.reciepes.slice());
      }

      updateRecipe(index: number, reciepeToUpdate: Reciepe){
        this.reciepes[index] = reciepeToUpdate;
        this.recipesChanged.next(this.reciepes.slice());
      }

      deleteRecipe(index: number){
        this.reciepes.splice(index,1);
        this.recipesChanged.next(this.reciepes.slice());
      }
}