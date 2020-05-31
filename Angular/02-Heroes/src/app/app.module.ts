import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*Rutas*/ 
import {APP_ROUTING} from './app.routes';

/*Servicios*/ 
import { HeroesService } from './servicios/heroes-s';



import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/shared/navbar/navbar.component';
import { HomeComponent } from './componentes/shared/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { HeroesComponent } from './componentes/heroes/heroes.component';
import { HeroeComponent } from './componentes/heroe/heroe.component';
import { BuscarComponent } from './componentes/buscar/buscar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
