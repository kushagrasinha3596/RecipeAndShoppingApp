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
import { AlertComponent } from './shared/alert-component/alert.component';
import { AlertComponentHelperDirective } from './shared/alertcomponent-helper.directive.ts/alertcomponent-helper.directive';
import { RecipeModuleClass } from './reciepe-book/recipe-module';



@NgModule({
  declarations: [
    AppComponent,
    ReciepeHeader,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    AuthComponent,
    LoadingSpinnerComponent,
    AlertComponent,
    AlertComponentHelperDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecipeModuleClass
  ],
  providers: [ShoppingService, RecipeService, RecipeResolver, AuthService, AuthGuard],
  bootstrap: [AppComponent],
  entryComponents: [AlertComponent]
})
export class AppModule { }
