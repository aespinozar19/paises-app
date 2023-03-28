import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class PorPaisComponent {

  termino             : string = '';
  existeError         : boolean = false;
  paises              : Country[] = [];
  paisesSugeridos     : Country[] = [];
  mostrarSugerencias  : boolean = false;

  constructor( private paisService: PaisService ){}

  buscar( termino: string ){
    this.mostrarSugerencias = false;
    this.existeError = false;
    this.termino = termino;
    console.log(this.termino);
    this.paisService.buscarPais( this.termino )
      .subscribe( (paises) => {
        console.log(paises);
        this.paises = paises;        
      }, (err) => {
        console.log('Error');
        console.info(err);
        this.existeError = true;
        this.paises = [];
      });
  }

  sugerencias( termino:string ){
    this.existeError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    // TODO: Agregar sugerencias

    this.paisService.buscarPais( termino )
      .subscribe(
        paises => this.paisesSugeridos = paises.splice(0,5), 
        (error) => this.paisesSugeridos = []
    );
  }

  buscaraSugerido( termino: string ){
    this.buscar(termino);
    
  }

  

}
