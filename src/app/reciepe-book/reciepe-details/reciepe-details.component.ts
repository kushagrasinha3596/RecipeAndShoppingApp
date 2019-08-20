import { Component, OnInit, Input } from '@angular/core';
import { Reciepe } from '../reciepe-book.model';

@Component({
  selector: 'app-reciepe-details',
  templateUrl: './reciepe-details.component.html',
  styleUrls: ['./reciepe-details.component.css']
})
export class ReciepeDetailsComponent implements OnInit {

  @Input() selectedItem : Reciepe;
  constructor() { }

  ngOnInit() {
  }

}
