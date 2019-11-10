import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListRoute } from './shoppinglist-route.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        ShoppingListRoute
    ]
})
export class ShoppingListModule{}