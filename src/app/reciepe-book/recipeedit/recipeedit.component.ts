import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipeedit',
  templateUrl: './recipeedit.component.html',
  styleUrls: ['./recipeedit.component.css']
})
export class RecipeeditComponent implements OnInit {

  id:number;
  editMode:boolean = false;
  recipeForm: FormGroup;

  constructor(private route : ActivatedRoute,
    private recipeService: RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe((param: Params)=>{
      this.id = +param['id'];
      this.editMode = param['id'] !== null;
      this.initForm(); //Route params changes whenever this component is loaded, hence initForm() is called from here
    });
  }

  onSubmit(){
    console.log(this.recipeForm);
  }

  private initForm(){
    let recipeName ='';
    let recipeImagePath ='';
    let recipeDescription ='';
    let recipeIngredients =  new FormArray([]);

    if(this.editMode){
      let recipe = this.recipeService.getSingleRecipeByIndex(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imageUrl;
      recipeDescription = recipe.description;
      if(recipe['ingredients']){
       for(let ingredient of recipe.ingredients){
         recipeIngredients.push(new FormGroup({
           name: new FormControl(ingredient.name),
           amount: new FormControl(ingredient.amount)
         }));
       }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imagepath': new FormControl(recipeImagePath),
      'description': new FormControl(recipeDescription),
      'ingredients': recipeIngredients
    });
  }

  addNewIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      'name': new FormControl(),
      'amount': new FormControl()
    }));
  }
  getRecipeIngredientsControls(){
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }
}
