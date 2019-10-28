import { Component, OnInit, OnDestroy, ɵNG_COMPONENT_DEF } from '@angular/core';
import { RecipeService } from '../reciepe-book/recipe.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
@Component({
    selector : 'reciepe-header',
    templateUrl : './header.html',
    styleUrls : ['./header.css']
})
export class ReciepeHeader implements OnInit, OnDestroy{
    
    private userSubs: Subscription;
    isAuthenticated: boolean = false;
    
    constructor(private recipeService: RecipeService,
        private authService: AuthService){}

        ngOnInit(){
            this.userSubs = this.authService.user.subscribe((user)=>{
             this.isAuthenticated = user ? true: false;
            });
        }

    SaveDataToServer(){
        this.recipeService.storeRecipeToDatabaseServer()
        .subscribe((success)=>{
            console.log("Recipe data sucessfully saved to database server");
        },(error)=>{
            console.log("Problem in storing recipe data to database server");
        });

        
    }

    FetchDataFromServer(){
        this.recipeService.fetchRecipeFromDatabaseServer()
        .subscribe((data)=>{
            console.log(data);
            this.recipeService.populateRecipeFromServer(data);
        });
    }

    onLogout(){
        this.authService.logout();
    }

    ngOnDestroy(){
        this.userSubs.unsubscribe();
    }
}