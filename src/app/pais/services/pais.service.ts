import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Country } from '../interfaces/pais.interface';
import { Pais } from '../interfaces/viewPais.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com';

  get httpParams(){ 
    return  new HttpParams().set('fields','name,capital,population,alpha2Code,cca3,flags');
  }

  constructor( private http: HttpClient ) { }

  buscarPais( termino: string ): Observable<Country[]> {    
    const url = `${ this.apiUrl }/v2/name/${ termino }`;
    return this.http.get<Country[]>( url, { params : this.httpParams } );
  }

  buscarPaisPorCapital( termino: string ): Observable<Country[]> {    
    const url = `${ this.apiUrl }/v2/capital/${ termino }`;
    return this.http.get<Country[]>( url, { params : this.httpParams } );
  }

  getPaisPorAlpha( id: string ): Observable<Pais> {    
    const url = `${ this.apiUrl }/v3.1/alpha/${ id }`;
    return this.http.get<Pais>( url );
  }
  
  buscarPaisPorRegion( region: string) : Observable<Country[]>{

    // const httpParams = new HttpParams()
    //   .set('fields','name,capital,population,alpha2Code,cca3,flags');

    const url = `${ this.apiUrl }/v3.1/region/${ region }`;
    return this.http.get<Country[]>( url, { params : this.httpParams  } )
      .pipe(
        tap( console.log )
      );
  }

}
