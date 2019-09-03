import { Ingredients } from '../shared/ingredients.model';

export class Reciepe{
    constructor(public name: string, 
        public description: string, 
        public imageUrl:string, 
        public ingredients : Ingredients[]){}
}