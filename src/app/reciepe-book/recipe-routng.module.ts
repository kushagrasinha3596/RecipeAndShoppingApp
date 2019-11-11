import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReciepeBookComponent } from './reciepe-book.component';
import { AuthGuard } from '../auth/authguard';
import { RecipehomepageComponent } from './recipehomepage/recipehomepage.component';
import { RecipeeditComponent } from './recipeedit/recipeedit.component';
import { ReciepeDetailsComponent } from './reciepe-details/reciepe-details.component';
import { RecipeResolver } from './recipe-resolver.service';
const routes: Routes = [
    {
        path: '',
        component: ReciepeBookComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                component: RecipehomepageComponent
            },
            {
                path: 'new',
                component: RecipeeditComponent
            },
            {
                path: ':id',
                component: ReciepeDetailsComponent,
                resolve: [RecipeResolver]
            },
            {
                path: ':id/edit',
                component: RecipeeditComponent,
                resolve: [RecipeResolver]
            }
        ]
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecipeRoutingModule{}