import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cocktail } from '../../shared/cocktail.model';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css'],
})
export class CocktailsListComponent implements OnInit {
  @Input('cocktails') public cocktails: Cocktail[];
  @Output() public selectEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  public selectCocktail(index:string){
    this.selectEvent.emit(index);
  }
}
