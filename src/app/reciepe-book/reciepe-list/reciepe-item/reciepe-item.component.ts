import { Component, OnInit, Input} from '@angular/core';
import { Reciepe } from '../../reciepe-book.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-reciepe-item',
  templateUrl: './reciepe-item.component.html',
  styleUrls: ['./reciepe-item.component.css']
})
export class ReciepeItemComponent implements OnInit {
  @Input() recipe: Reciepe;

  constructor(private recipeService : RecipeService) { }

  ngOnInit() {
  }

  selectedItem(){
    this.recipeService.selectedRecipe.emit(this.recipe);
  }
}
