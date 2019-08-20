import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  desiredEvent: String;
  title = 'ReciepeAndShopping';

  eventSelected(param: string){
    console.log("Event Clicked "+param);
    this.desiredEvent = param;
  }
}
