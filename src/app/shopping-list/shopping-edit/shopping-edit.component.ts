import { Component, OnInit, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { ShoppingService } from '../shopping.service';
import { FormGroup, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  subscription: Subscription;
  editItemIndex: number;
  editMode: boolean = false;
  @ViewChild('f',{static:false}) userForm: NgForm;
  constructor(private shoppingService : ShoppingService) { }

  ngOnInit() {
    this.shoppingService.editShoppingitem
    .subscribe((param: number)=>{
      this.editItemIndex = param;
      this.editMode = true;
      const shoppList = this.shoppingService.getIngredientByIndex(this.editItemIndex);
      this.userForm.setValue({
        'recipe-name': shoppList.name,
        'amount': shoppList.amount
      });
    });
  }

  addItem(param: any){
    const nameOfIngradient = param.value['recipe-name']; 
    const amountOfIngradient = parseInt(param.value['amount'],10);
    const itemAdded = new Ingredients(nameOfIngradient, amountOfIngradient);
    if(this.editMode){
      this.shoppingService.updateIngredient(this.editItemIndex,itemAdded);
    }else{
      this.shoppingService.addIngredients(itemAdded);
    }
    this.editMode = false;
    this.userForm.reset();
  }

  deleteShoppingItem(){
    this.shoppingService.deleteItemByIndex(this.editItemIndex);
    this.resettingForm();
  }

  resettingForm(){
    this.userForm.reset();
    this.editMode = false;
  }
}
