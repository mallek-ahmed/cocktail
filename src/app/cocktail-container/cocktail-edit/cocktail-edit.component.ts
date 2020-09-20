import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { CocktailService } from '../../shared/services/cocktail.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Cocktail } from 'src/app/shared/models/cocktail.model';

@Component({
  selector: 'app-cocktail-edit',
  templateUrl: './cocktail-edit.component.html',
  styleUrls: ['./cocktail-edit.component.css']
})
export class CocktailEditComponent implements OnInit {

  public cocktailFormGroup: FormGroup;
  public action: string;
  private cocktail: Cocktail;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private cocktailService: CocktailService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (parametres: ParamMap) => {
        if (parametres.get('index')) {
          this.action = 'Modifier';
          this.cocktail = this.cocktailService.getCocktail(Number(parametres.get('index')));
          console.log(this.cocktail);
        } else {
          this.action = 'Ajouter';
        }
      }
    );

    this.initForm2(this.cocktail);
  }

  public addIngredient(): void {
    (this.cocktailFormGroup.get('ingredients') as FormArray).push(this.fb.group({
      name: [''],
      quantity: ['']
    }));
  }

  public createCocktail(): void {
    const index = this.cocktailService.addCocktail(this.cocktailFormGroup.value);
    this.goToItems(index);
  }

  public initForm(cocktail = { name: '', img: '', desc: '', ingredients: [] }): void {
    this.cocktailFormGroup = this.fb.group({
      name: [cocktail.name, Validators.required],
      img: [cocktail.img, Validators.required],
      desc: cocktail.desc,
      ingredients: this.fb.array(
        cocktail.ingredients.map(ingredient => this.fb.group({ name: ingredient.name, quantity: ingredient.quantity }))
      )
    });
  }


  public initForm2(cocktail = { name: '', img: '', desc: '', ingredients: [] }): void {
    this.cocktailFormGroup = this.fb.group({
      name: this.fb.control(cocktail.name, Validators.required),
      img: [cocktail.img, Validators.required],
      desc: this.fb.control(cocktail.desc),
      ingredients: this.fb.array(cocktail.ingredients.map(ing => this.fb.group({ name: ing.name, quantity: ing.quantity })))
    });
  }


  private goToItems(index: number): void {
    this.router.navigateByUrl('/cocktails/' + index);
  }
}
