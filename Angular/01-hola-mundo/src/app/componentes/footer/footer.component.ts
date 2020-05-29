import { Component} from '@angular/core';
import { DatePipe } from '@angular/common';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent{

anio: number;
constructor(){
  this.anio = new Date().getFullYear();
}

}
