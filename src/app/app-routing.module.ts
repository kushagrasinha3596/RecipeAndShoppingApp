import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReciepeBookComponent } from './reciepe-book/reciepe-book.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ReciepeDetailsComponent } from './reciepe-book/reciepe-details/reciepe-details.component';
import { ReciepeListComponent } from './reciepe-book/reciepe-list/reciepe-list.component';
import { ReciepeItemComponent } from './reciepe-book/reciepe-list/reciepe-item/reciepe-item.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipehomepageComponent } from './reciepe-book/recipehomepage/recipehomepage.component';
import { RecipeeditComponent } from './reciepe-book/recipeedit/recipeedit.component';
import { RecipeResolver } from './reciepe-book/recipe-resolver.service';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/authguard';


const routes: Routes = [
  {
    path:'',
    redirectTo : '/recipes',
    pathMatch:'full'
  },
  {
    path:'recipes',
    component: ReciepeBookComponent,
    canActivate: [AuthGuard],
    children : [
      {
        path: '', 
        component: RecipehomepageComponent
      },
      {
        path:'new',
        component: RecipeeditComponent
      },
      {
        path:':id',
        component: ReciepeDetailsComponent,
        resolve: [RecipeResolver]
      },
      {
        path:':id/edit',
        component: RecipeeditComponent,
        resolve: [RecipeResolver]
      }
    ]
  },
  {
    path:'shoppinglist',
    component: ShoppingListComponent
  },
  {
    path:'auth',
    component: AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
