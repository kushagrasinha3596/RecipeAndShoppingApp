import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReciepeHeader } from './header/header';
import { ReciepeBookComponent } from './reciepe-book/reciepe-book.component';
import { ReciepeListComponent } from './reciepe-book/reciepe-list/reciepe-list.component';
import { ReciepeItemComponent } from './reciepe-book/reciepe-list/reciepe-item/reciepe-item.component';
import { ReciepeDetailsComponent } from './reciepe-book/reciepe-details/reciepe-details.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingService } from './shopping-list/shopping.service';
import { RecipeService } from './reciepe-book/recipe.service';
import { RecipehomepageComponent } from './reciepe-book/recipehomepage/recipehomepage.component';


@NgModule({
  declarations: [
    AppComponent,
    ReciepeHeader,
    ReciepeBookComponent,
    ReciepeListComponent,
    ReciepeItemComponent,
    ReciepeDetailsComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipehomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ShoppingService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
