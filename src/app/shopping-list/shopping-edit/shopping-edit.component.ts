import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { ShoppingService } from '../shopping.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput',{static:false}) nameIngradient : ElementRef;
  @ViewChild('amountInput',{static:false}) amountIngradient : ElementRef;

  constructor(private shoppingService : ShoppingService) { }

  ngOnInit() {
  }

  addItem(){
    const nameOfIngradient = this.nameIngradient.nativeElement.value;
    const amountOfIngradient = parseInt(this.amountIngradient.nativeElement.value,10);
    const itemAdded = new Ingredients(nameOfIngradient, amountOfIngradient);
    this.shoppingService.addIngredients(itemAdded);
  }
}
