import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Reciepe } from './reciepe-book.model';
import { Injectable } from '@angular/core';
import { RecipeService } from './recipe.service';

@Injectable()
export class RecipeResolver implements Resolve<Reciepe[]>{
    constructor(private recipeService: RecipeService){
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
       return this.recipeService.fetchRecipeFromDatabaseServer();
    }
}