import { NgModule } from '@angular/core';
import { AlertComponent } from './alert-component/alert.component';
import { LoadingSpinnerComponent } from './spinner/loading-spinner.component';
import { AlertComponentHelperDirective } from './alertcomponent-helper.directive.ts/alertcomponent-helper.directive';
import { DropdownDirective } from './dropdown.directive';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        AlertComponent,
        LoadingSpinnerComponent,
        AlertComponentHelperDirective,
        DropdownDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        AlertComponent,
        LoadingSpinnerComponent,
        AlertComponentHelperDirective,
        DropdownDirective,
        CommonModule
    ],
    entryComponents: [AlertComponent]
})
export class SharedModule{}