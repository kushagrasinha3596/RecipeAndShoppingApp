import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Reciepe } from '../reciepe-book.model';

@Component({
  selector: 'app-reciepe-list',
  templateUrl: './reciepe-list.component.html',
  styleUrls: ['./reciepe-list.component.css']
})
export class ReciepeListComponent implements OnInit {

  reciepes:Reciepe[]=[
    new Reciepe('Sweet Kheer','Made with milk and rice','https://www.vegrecipesofindia.com/wp-content/uploads/2013/10/rice-kheer-recipe-2-500x375.jpg'),
    new Reciepe('A duplicate Sweet Kheer','Made with milk and rice and dry fruits','https://www.vegrecipesofindia.com/wp-content/uploads/2013/10/rice-kheer-recipe-2-500x375.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
