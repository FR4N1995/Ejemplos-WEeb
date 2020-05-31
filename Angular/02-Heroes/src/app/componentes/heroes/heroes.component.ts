import { Component, OnInit } from '@angular/core';
import {HeroesService, Heroes} from '../../servicios/heroes-s';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes:Heroes[] = [];


  constructor( private _servicioHeroes: HeroesService, private router:Router) { 
    console.log("Constructor");
  }

  ngOnInit(): void {
    this.heroes = this._servicioHeroes.getHeroes();
    console.log(this.heroes);
  }
  
  verHeroe(idx:number){
    this.router.navigate( ['/heroe', idx] );
  }


}
