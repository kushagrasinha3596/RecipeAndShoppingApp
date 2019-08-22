import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput',{static:false}) nameIngradient : ElementRef;
  @ViewChild('amountInput',{static:false}) amountIngradient : ElementRef;
  @Output() addedIngradient = new EventEmitter<Ingredients>();

  constructor() { }

  ngOnInit() {
  }

  addItem(){
    const nameOfIngradient = this.nameIngradient.nativeElement.value;
    const amountOfIngradient = parseInt(this.amountIngradient.nativeElement.value,10);
    const itemAdded = new Ingredients(nameOfIngradient, amountOfIngradient);
    this.addedIngradient.emit(itemAdded);
  }
}
