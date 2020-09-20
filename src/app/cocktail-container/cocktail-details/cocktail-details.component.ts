import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { Cocktail } from '../../shared/models/cocktail.model';
import { PanierService } from '../../shared/services/panier.service';
import { CocktailService } from '../../shared/services/cocktail.service';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.css'],
})
export class CocktailDetailsComponent implements OnInit {
  public cocktail: Cocktail;
  public index: number = 0;
  constructor(private activatedRoute: ActivatedRoute, private cocktailService: CocktailService, private panierServicec: PanierService) { }

  public addPanier(ingredients: Ingredient[]): void {
    this.panierServicec.addIngredients(ingredients);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        if (params.index) {
          this.index = params.index;
        }
        this.cocktailService.getCocktail(params.index).subscribe((cocktail:Cocktail)=> this.cocktail = cocktail);
      }
    );
  }

  getUrl(): string[] {
    return ['/cocktails', '' + this.index, 'edit'];
  }

}
