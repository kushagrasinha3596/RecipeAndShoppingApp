import { Component } from '@angular/core';
import { RecipeService } from '../reciepe-book/recipe.service';
@Component({
    selector : 'reciepe-header',
    templateUrl : './header.html',
    styleUrls : ['./header.css']
})
export class ReciepeHeader{
    
    constructor(private recipeService: RecipeService){}

    SaveDataToServer(){
        this.recipeService.storeRecipeToDatabaseServer()
        .subscribe((success)=>{
            console.log("Recipe data sucessfully saved to database server");
        },(error)=>{
            console.log("Problem in storing recipe data to database server");
        });
    }
}