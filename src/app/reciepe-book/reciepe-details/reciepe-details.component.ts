import { Component, OnInit, Input } from '@angular/core';
import { Reciepe } from '../reciepe-book.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-reciepe-details',
  templateUrl: './reciepe-details.component.html',
  styleUrls: ['./reciepe-details.component.css']
})
export class ReciepeDetailsComponent implements OnInit {

  @Input() selectedItem : Reciepe;
  constructor(private recipeService : RecipeService) {}

  ngOnInit() {
    console.log("Kushagra :"+this.selectedItem);
  }

  addToShoppingList(){
    this.recipeService.addIngredient(this.selectedItem.ingredients);
  }
}
