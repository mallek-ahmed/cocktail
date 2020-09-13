import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../../shared/models/cocktail.model';
import { CocktailService } from '../../shared/services/cocktail.service';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css'],
})
export class CocktailsListComponent implements OnInit {
  public cocktails: Cocktail[];

  public activeCocktail: number = 0 ;

  constructor(private cocktaiService: CocktailService) {}

  ngOnInit(): void {
    this.cocktaiService.cocktails.subscribe( (cocktails: Cocktail[]) => {
      this.cocktails = cocktails ;
    });
  }

  public selectCocktail(index: number){
    this.activeCocktail = index ;
    this.cocktaiService.selectCocktail(index);
  }
}
