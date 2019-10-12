import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Reciepe } from '../reciepe-book.model';

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
    private recipeService: RecipeService,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((param: Params)=>{
      this.id = +param['id'];
      this.editMode = param['id'] !== undefined;
      this.initForm(); //Route params changes whenever this component is loaded, hence initForm() is called from here
    });
  }

  onSubmit(){
    let newOrUpdatedRecipe = new Reciepe(this.recipeForm.value['name'],
    this.recipeForm.value['description'],
    this.recipeForm.value['imagepath'],
    this.recipeForm.value['ingredients']);
    if(this.editMode){
      this.recipeService.updateRecipe(this.id,newOrUpdatedRecipe);
    }else{
      this.recipeService.addRecipe(newOrUpdatedRecipe);
    }
    this.onCancel();
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
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
           name: new FormControl(ingredient.name, Validators.required),
           amount: new FormControl(ingredient.amount, [
            Validators.required,
            Validators.pattern(/^[1-9]+[0-9]*$/)
           ])
         }));
       }
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagepath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients
    });
  }

  addNewIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/)
       ])
    }));
  }

  getRecipeIngredientsControls(){
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  deleteIngredient(index: number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
}
