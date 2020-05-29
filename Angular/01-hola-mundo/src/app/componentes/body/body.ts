import{Component} from '@angular/core';


@Component({
    selector: 'app-body',
    templateUrl: './body.html'
})
export class bodyComponente{
    
    mostrar = true;



    frase: any = {
        mensaje : 'un gran poder con lleva una gran responsabilidad',
        autor: 'Spiderman'
    };

    personajes: string[] = ['Spiderman','Stive', 'Iroman'];

}