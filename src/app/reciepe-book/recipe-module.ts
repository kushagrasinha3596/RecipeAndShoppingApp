import { NgModule } from '@angular/core';
import { ReciepeBookComponent } from './reciepe-book.component';
import { ReciepeListComponent } from './reciepe-list/reciepe-list.component';
import { ReciepeItemComponent } from './reciepe-list/reciepe-item/reciepe-item.component';
import { ReciepeDetailsComponent } from './reciepe-details/reciepe-details.component';
import { RecipehomepageComponent } from './recipehomepage/recipehomepage.component';
import { RecipeeditComponent } from './recipeedit/recipeedit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RecipeRoutingModule } from './recipe-routng.module';

@NgModule({
    declarations: [
    ReciepeBookComponent,
    ReciepeListComponent,
    ReciepeItemComponent,
    ReciepeDetailsComponent,
    RecipehomepageComponent,
    RecipeeditComponent
    ],
    imports:[
        ReactiveFormsModule,
        CommonModule,
        RouterModule,
        RecipeRoutingModule
    ]
})
export class RecipeModuleClass{}