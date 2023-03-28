import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent {
  termino:string = '';
  existeError: boolean = false;
  paises: Country[] = [];

  constructor( private paisService: PaisService ){}

  buscar( termino: string ){
    this.existeError = false;
    this.termino = termino;
    console.log(this.termino);
    this.paisService.buscarPaisPorCapital( this.termino )
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
    
  }
}
