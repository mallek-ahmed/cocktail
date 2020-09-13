import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cocktail } from '../models/cocktail.model';
import { Ingredient } from '../models/ingredient.model';

@Injectable()
export class CocktailService {
public cocktails: BehaviorSubject<Cocktail[]> =  new BehaviorSubject<Cocktail[]>(
  [
    new Cocktail(
      'Mojito-1',
      'http://anotherwhiskyformisterbukowski.com/wp-content/uploads/2016/09/mojito-1.jpg',
      'Le mojito, prononcé en espagnol, est un cocktail à base de rhum, de citron vert et de feuilles de menthe fraîche, né à Cuba dans les années 1910.',
      [
        new Ingredient('ingredient 11', 1),
        new Ingredient('ingredient 12', 2),
        new Ingredient('ingredient 13', 3),
      ]
    ),
    new Cocktail(
      'Mojito-2',
      'http://anotherwhiskyformisterbukowski.com/wp-content/uploads/2016/09/mojito-1.jpg',
      'Le mojito, prononcé en espagnol, est un cocktail à base de rhum, de citron vert et de feuilles de menthe fraîche, né à Cuba dans les années 1910.',
      [
        new Ingredient('ingredient 21', 1),
        new Ingredient('ingredient 22', 2),
        new Ingredient('ingredient 23', 3),
      ]
    ),
    new Cocktail(
      'Mojito-3',
      'http://anotherwhiskyformisterbukowski.com/wp-content/uploads/2016/09/mojito-1.jpg',
      'Le mojito, prononcé en espagnol, est un cocktail à base de rhum, de citron vert et de feuilles de menthe fraîche, né à Cuba dans les années 1910.',
      [
        new Ingredient('ingredient 31', 1),
        new Ingredient('ingredient 32', 2),
        new Ingredient('ingredient 33', 3),
      ]
    ),
  ]
);

public cocktail: BehaviorSubject<Cocktail> =  new BehaviorSubject<Cocktail>(this.cocktails.value[0]);

constructor() { }

public selectCocktail(index: number): void{
  this.cocktail.next(this.cocktails.value[index]);
}

}
