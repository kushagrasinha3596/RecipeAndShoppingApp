import { Component, OnInit } from '@angular/core';
import { Reciepe } from './reciepe-book.model';

@Component({
  selector: 'app-reciepe-book',
  templateUrl: './reciepe-book.component.html',
  styleUrls: ['./reciepe-book.component.css']
})
export class ReciepeBookComponent implements OnInit {

  itemWasSelected : Reciepe;
  constructor() { }

  ngOnInit() {
  }

}
