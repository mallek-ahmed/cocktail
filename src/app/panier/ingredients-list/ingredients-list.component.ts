import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../../shared/models/ingredient.model';
import { PanierService } from '../../shared/services/panier.service';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.css']
})
export class IngredientsListComponent implements OnInit, OnDestroy {
  public ingredients: Ingredient[] = [] ;
  private subscription: Subscription;
  constructor(private panierSevice: PanierService) { }

  ngOnInit(): void {
    this.subscription = this.panierSevice.panier.subscribe( (ingredients: Ingredient[]) => {
      this.ingredients = ingredients ;
    } );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
