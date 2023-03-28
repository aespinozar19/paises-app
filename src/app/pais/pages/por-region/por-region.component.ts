import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right:2.5px;
    }
  `]
})
export class PorRegionComponent {
  termino:string = '';
  existeError: boolean = false;
  paises: Country[] = [];


  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];

  regionActiva: string = '';


  constructor( private paisService: PaisService ){}

  getClaseCSS( region:string ): string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activarRegion( region: string ){

    if (this.regionActiva === region){ return;}

    this.regionActiva = region;
    this.paises = [];

    //TODO: hacer el llamado al servicio

    this.paisService.buscarPaisPorRegion( this.regionActiva )
    .subscribe( (paises) => {
      console.log(paises);
      this.paises = paises;        
    });
  }

  // buscar( termino: string ){
  //   this.existeError = false;
  //   this.termino = termino;
  //   console.log(this.termino);
  //   this.paisService.buscarPaisPorRegion( this.termino )
  //     .subscribe( (paises) => {
  //       console.log(paises);
  //       this.paises = paises;        
  //     }, (err) => {
  //       console.log('Error');
  //       console.info(err);
  //       this.existeError = true;
  //       this.paises = [];
  //     });
  // }

  // sugerencias( termino:string ){
  //   this.existeError = false;    
  // }
}
