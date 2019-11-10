import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReciepeHeader } from './header/header';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingService } from './shopping-list/shopping.service';
import { RecipeService } from './reciepe-book/recipe.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeResolver } from './reciepe-book/recipe-resolver.service';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth/auth.service';
import { LoadingSpinnerComponent } from './shared/spinner/loading-spinner.component';
import { AuthGuard } from './auth/authguard';
import { AlertComponent } from './shared/alert-component/alert.component';
import { AlertComponentHelperDirective } from './shared/alertcomponent-helper.directive.ts/alertcomponent-helper.directive';
import { RecipeModuleClass } from './reciepe-book/recipe-module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';



@NgModule({
  declarations: [
    AppComponent,
    ReciepeHeader,
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
    RecipeModuleClass,
    ShoppingListModule
  ],
  providers: [ShoppingService, RecipeService, RecipeResolver, AuthService, AuthGuard],
  bootstrap: [AppComponent],
  entryComponents: [AlertComponent]
})
export class AppModule { }
