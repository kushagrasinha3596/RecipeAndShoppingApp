import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReciepeHeader } from './header/header';
import { ShoppingService } from './shopping-list/shopping.service';
import { RecipeService } from './reciepe-book/recipe.service';
import { RecipeResolver } from './reciepe-book/recipe-resolver.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/authguard';
import { RecipeModuleClass } from './reciepe-book/recipe-module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    ReciepeHeader,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RecipeModuleClass,
    ShoppingListModule,
    SharedModule,
    AuthModule
  ],
  providers: [ShoppingService, RecipeService, RecipeResolver, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
