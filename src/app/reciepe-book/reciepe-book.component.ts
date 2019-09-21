import { Component, OnInit } from '@angular/core';
import { Reciepe } from './reciepe-book.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-reciepe-book',
  templateUrl: './reciepe-book.component.html',
  styleUrls: ['./reciepe-book.component.css'],
  providers: [RecipeService]
})
export class ReciepeBookComponent implements OnInit {

  constructor() {};

  ngOnInit() {
  }

}
