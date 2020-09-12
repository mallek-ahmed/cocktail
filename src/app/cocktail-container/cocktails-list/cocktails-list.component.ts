import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cocktail } from '../../shared/models/cocktail.model';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css'],
})
export class CocktailsListComponent implements OnInit {
  @Input('cocktails') public cocktails: Cocktail[];
  @Output() public selectEvent : EventEmitter<number> = new EventEmitter<number>();


  public activeCocktail : number = 0 ;

  constructor() {}

  ngOnInit(): void {}

  public selectCocktail(index:number){
    this.selectEvent.emit(index);
    this.activeCocktail = index ;
  }
}
