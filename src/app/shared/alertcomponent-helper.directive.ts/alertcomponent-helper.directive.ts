import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[helperDirective]'
})
export class AlertComponentHelperDirective{
    constructor(public viewContainerRef: ViewContainerRef){};
}