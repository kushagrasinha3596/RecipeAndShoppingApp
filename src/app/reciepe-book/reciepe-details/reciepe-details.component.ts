import { Component, OnInit} from '@angular/core';
import { Reciepe } from '../reciepe-book.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-reciepe-details',
  templateUrl: './reciepe-details.component.html',
  styleUrls: ['./reciepe-details.component.css']
})
export class ReciepeDetailsComponent implements OnInit {

  selectedItem : Reciepe;
  recipeId : number;
  constructor(private recipeService : RecipeService,
    private route : ActivatedRoute,
    private router : Router) {}

  ngOnInit() {
    console.log("Recipe Details Component ngOnInit() :"+this.selectedItem);
    this.route.params.subscribe((param : Params)=>{
      this.recipeId = +param['id'];
      this.selectedItem = this.recipeService.getSingleRecipeByIndex(this.recipeId);
    });
  }

  deleteRecipe(){
    this.recipeService.deleteRecipe(this.recipeId);
  }
  addToShoppingList(){
    this.recipeService.addIngredient(this.selectedItem.ingredients);
  }

  editRecipeClicked(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
}
