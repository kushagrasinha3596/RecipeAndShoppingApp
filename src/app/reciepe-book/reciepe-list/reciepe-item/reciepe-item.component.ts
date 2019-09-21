import { Component, OnInit, Input} from '@angular/core';
import { Reciepe } from '../../reciepe-book.model';

@Component({
  selector: 'app-reciepe-item',
  templateUrl: './reciepe-item.component.html',
  styleUrls: ['./reciepe-item.component.css']
})
export class ReciepeItemComponent implements OnInit {
  @Input() recipe: Reciepe;
  @Input() index : number;

  ngOnInit() {
    debugger
    console.log("ngOnInit() of RecipeItemComponent ******** "+this.index+" "+this.recipe);
  }

}
