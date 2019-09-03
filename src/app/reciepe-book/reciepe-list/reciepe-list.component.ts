import { Component, OnInit} from '@angular/core';
import { Reciepe } from '../reciepe-book.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-reciepe-list',
  templateUrl: './reciepe-list.component.html',
  styleUrls: ['./reciepe-list.component.css']
})
export class ReciepeListComponent implements OnInit {

 reciepes : Reciepe[] = [];
  constructor(private recipeService : RecipeService) { };

  ngOnInit() {
    this.reciepes = this.recipeService.getRecipes();
  }
}
