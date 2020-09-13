import { Route, RouterModule} from '@angular/router';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { PanierComponent } from './panier/panier.component';

const APP_ROUTE: Route[] = [
    {path : '' , redirectTo: 'cocktails', pathMatch: 'full'},
    {path : 'panier' , component : PanierComponent  },
    {path : 'cocktails', component: CocktailContainerComponent }
]
;

export const AppRouting = RouterModule.forRoot(APP_ROUTE);
