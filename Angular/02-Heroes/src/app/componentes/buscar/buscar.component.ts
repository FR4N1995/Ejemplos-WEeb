import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService } from '../../servicios/heroes-s';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  heroes:any [] = [];
  termino: string;

  constructor( private activateRoute: ActivatedRoute,
               private _heroesServie: HeroesService) { }

  ngOnInit()  {

    this.activateRoute.params.subscribe(params =>{
      this.termino = params['termino'];
      this.heroes = this._heroesServie.bucarHeroes(params['termino']);
      console.log(this.heroes);
    });

  }

}
