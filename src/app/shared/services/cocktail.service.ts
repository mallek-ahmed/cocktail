import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cocktail } from '../models/cocktail.model';
import { filter, map } from 'rxjs/operators';

@Injectable()
export class CocktailService {
  public cocktails: BehaviorSubject<Cocktail[]> = new BehaviorSubject<Cocktail[]>(null);

  constructor(private http: HttpClient) {
    this.cocktailsInit();
  }

  public getCocktail(index: number): Observable<Cocktail> {
    return this.cocktails.pipe(
      filter((cocktails: Cocktail[]) => cocktails !== null),
      map((cocktails: Cocktail[]) => cocktails[index])
    );
    // return this.cocktails.value[index];
  }

  public addCocktail(cocktail: Cocktail): number {
    let cocktails: Cocktail[];
    console.log(this.cocktails.value)
    if (this.cocktails.value == null) {
      console.log('a1');
      cocktails = [];
    } else {
      console.log('a2');
      cocktails = this.cocktails.value.slice();
    }

    let index: number;
    // cocktails.forEach((cock, i) => {
    //   if (cock.name === cocktail.name) {
    //     index = i;
    //   }
    // });
    index = cocktails.map(c => c.name).indexOf(cocktail.name);
    if (index >= 0) {
      cocktails[index] = cocktail;
    } else {
      cocktails.push(cocktail);
      index = cocktails.length - 1;
    }
    this.cocktails.next(cocktails);
    this.http.put('https://cocktails-e7847.firebaseio.com/cocktails.json', cocktails).subscribe(res => console.log(res));
    return index;
  }


  // public editerCocktail(cocktail: Cocktail): void {
  //   const cocktails = this.cocktails.value.slice();
  //   let index: number;
  //   cocktails.forEach((cock, i) => {
  //     if (cock.name === cocktail.name) {
  //       index = i;
  //     }
  //   });
  //   cocktails[index] = cocktail;
  //   this.cocktails.next(cocktails);
  // }

  public cocktailsInit(): void {
    this.http.get('https://cocktails-e7847.firebaseio.com/cocktails.json').subscribe((cocktails: Cocktail[]) => {
      this.cocktails.next(cocktails);
    });
  }

}
