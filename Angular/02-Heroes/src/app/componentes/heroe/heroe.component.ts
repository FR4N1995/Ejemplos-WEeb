import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../servicios/heroes-s';
  
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent  {

  horeo:any = {};



  constructor(private activatedRouter: ActivatedRoute, 
              private servicioheroe: HeroesService
    
    
    ){     
    this.activatedRouter.params.subscribe( params => {
    this.horeo = this.servicioheroe.getHeroe( params ['id']);

    } )

  }
}
