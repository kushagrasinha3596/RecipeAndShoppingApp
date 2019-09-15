import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReciepeBookComponent } from './reciepe-book/reciepe-book.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ReciepeDetailsComponent } from './reciepe-book/reciepe-details/reciepe-details.component';
import { ReciepeListComponent } from './reciepe-book/reciepe-list/reciepe-list.component';
import { ReciepeItemComponent } from './reciepe-book/reciepe-list/reciepe-item/reciepe-item.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipehomepageComponent } from './reciepe-book/recipehomepage/recipehomepage.component';


const routes: Routes = [
  {
    path:'',
    redirectTo : '/recipes',
    pathMatch:'full'
  },
  {
    path:'recipes',
    component: ReciepeBookComponent,
    children : [
      {
        path: '', 
        component: RecipehomepageComponent
      },
      {
        path:':id',
        component: ReciepeDetailsComponent
      }
    ]
  },
  {
    path:'shoppinglist',
    component: ShoppingListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
