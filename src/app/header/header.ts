import { Component, EventEmitter, Output} from '@angular/core';
@Component({
    selector : 'reciepe-header',
    templateUrl : './header.html',
    styleUrls : ['./header.css']
})
export class ReciepeHeader{
    @Output() selectedEvent = new EventEmitter<any>();

    eventClicked(param: string){
        console.log("A");
        this.selectedEvent.emit(param);
    }
}