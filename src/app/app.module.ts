import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
import { RecipeeditComponent } from './reciepe-book/recipeedit/recipeedit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeResolver } from './reciepe-book/recipe-resolver.service';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth/auth.service';
import { LoadingSpinnerComponent } from './shared/spinner/loading-spinner.component';
import { AuthGuard } from './auth/authguard';



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
    RecipeeditComponent,
    AuthComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ShoppingService, RecipeService, RecipeResolver, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
