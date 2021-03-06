
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './componentes/shared/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { HeroesComponent } from './componentes/heroes/heroes.component';
import { HeroeComponent } from './componentes/heroe/heroe.component';
import { BuscarComponent} from './componentes/buscar/buscar.component';



const APP_ROUTE: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'heroes', component: HeroesComponent},
    {path: 'heroe/:id', component: HeroeComponent},
    {path: 'buscar/:termino', component: BuscarComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'
}


];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTE);

