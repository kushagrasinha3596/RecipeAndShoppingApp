import { Directive, HostListener, HostBinding, ElementRef } from "@angular/core";

@Directive({
    selector : '[appdropdown]'
})
export class DropdownDirective{
    @HostBinding('class.open') isOpen : boolean = false;

    @HostListener('click') whenClicked(){
        this.isOpen = !this.isOpen;
    }
}