import { Component, OnInit, Input } from '@angular/core';
import { Cocktail } from '../../shared/models/cocktail.model';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.css'],
})
export class CocktailDetailsComponent implements OnInit {
  @Input('cocktail') public cocktail: Cocktail;
  constructor() {}

  ngOnInit(): void {}
}
