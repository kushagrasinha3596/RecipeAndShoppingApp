import { Component, OnInit} from '@angular/core';
import { Reciepe } from '../reciepe-book.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reciepe-list',
  templateUrl: './reciepe-list.component.html',
  styleUrls: ['./reciepe-list.component.css']
})
export class ReciepeListComponent implements OnInit {

 reciepes : Reciepe[] = [];
  constructor(private recipeService : RecipeService,
              private router : Router,
              private route : ActivatedRoute) { };

  ngOnInit() {
    this.reciepes = this.recipeService.getRecipes();
  }

  newRecipeClicked(){
    this.router.navigate(['new'], {relativeTo : this.route});
  }
}
