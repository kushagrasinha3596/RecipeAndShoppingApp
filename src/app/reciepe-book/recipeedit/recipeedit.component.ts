import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipeedit',
  templateUrl: './recipeedit.component.html',
  styleUrls: ['./recipeedit.component.css']
})
export class RecipeeditComponent implements OnInit {

  id:number;
  editMode:boolean = false;

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    debugger
    this.route.params.subscribe((param: Params)=>{
      this.id = +param['id'];
      this.editMode = param['id'] !== undefined;
    });
  }

}
