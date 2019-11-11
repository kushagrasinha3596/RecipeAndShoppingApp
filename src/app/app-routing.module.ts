import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListModule } from './shopping-list/shopping-list.module';


const routes: Routes = [
  {
    path:'',
    redirectTo : '/recipes',
    pathMatch:'full'
  },
  {
    path: 'recipes',
    loadChildren: './reciepe-book/recipe-module#RecipeModuleClass'
  },
  {
    path: 'shoppinglist',
    loadChildren: './shopping-list/shopping-list.module#ShoppingListModule'
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
