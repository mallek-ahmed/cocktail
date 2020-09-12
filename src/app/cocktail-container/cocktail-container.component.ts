import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../shared/models/cocktail.model';

@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.css']
})
export class CocktailContainerComponent implements OnInit {
  
  public cocktails: Cocktail[] = [
    new Cocktail('Mojito-1', 'http://anotherwhiskyformisterbukowski.com/wp-content/uploads/2016/09/mojito-1.jpg', 'Le mojito, prononcé en espagnol, est un cocktail à base de rhum, de citron vert et de feuilles de menthe fraîche, né à Cuba dans les années 1910.'),
    new Cocktail('Mojito-2', 'http://anotherwhiskyformisterbukowski.com/wp-content/uploads/2016/09/mojito-1.jpg', 'Le mojito, prononcé en espagnol, est un cocktail à base de rhum, de citron vert et de feuilles de menthe fraîche, né à Cuba dans les années 1910.'),
    new Cocktail('Mojito-3', 'http://anotherwhiskyformisterbukowski.com/wp-content/uploads/2016/09/mojito-1.jpg', 'Le mojito, prononcé en espagnol, est un cocktail à base de rhum, de citron vert et de feuilles de menthe fraîche, né à Cuba dans les années 1910.'),
    new Cocktail('Mojito-4', 'http://anotherwhiskyformisterbukowski.com/wp-content/uploads/2016/09/mojito-1.jpg', 'Le mojito, prononcé en espagnol, est un cocktail à base de rhum, de citron vert et de feuilles de menthe fraîche, né à Cuba dans les années 1910.'),
    new Cocktail('Mojito-5', 'http://anotherwhiskyformisterbukowski.com/wp-content/uploads/2016/09/mojito-1.jpg', 'Le mojito, prononcé en espagnol, est un cocktail à base de rhum, de citron vert et de feuilles de menthe fraîche, né à Cuba dans les années 1910.')
  ];

  public cocktail = new Cocktail('Mojito', 'http://anotherwhiskyformisterbukowski.com/wp-content/uploads/2016/09/mojito-1.jpg', 'Le mojito, prononcé en espagnol, est un cocktail à base de rhum, de citron vert et de feuilles de menthe fraîche, né à Cuba dans les années 1910.');
  
  constructor() { }

  ngOnInit(): void {
  }

  public changer(item:string){
    //console.log(item);
    this.cocktail = this.cocktails[item];
  }

}
