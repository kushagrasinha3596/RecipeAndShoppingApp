import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingService } from './shopping.service';
import { Subject, Subscription } from 'rxjs';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy{

  ingredients : Ingredients[] = [];
  ingredientChangedSubject : Subscription;

  constructor(private shoppingService : ShoppingService) {};

  ngOnInit() {
    console.log("Switched to ShoppingListComponent");
    this.ingredients = this.shoppingService.getIngredients();
    this.ingredientChangedSubject = this.shoppingService.ingredientsChanged.
    subscribe((ingredient : Ingredients[])=>{
      this.ingredients = ingredient;
    });
  }

  onEditShoppingItem(param: number){
    this.shoppingService.editShoppingitem.next(param);
  }

  //Unsubscribing to the subscribed subscription
  ngOnDestroy(){
    this.ingredientChangedSubject.unsubscribe();
  }
}
