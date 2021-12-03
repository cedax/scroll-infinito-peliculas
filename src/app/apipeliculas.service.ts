import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIPeliculasService {

  constructor() { }

  public async getPeliculas(pagina: number): Promise<any> {
    try {
      const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=deb365e929016cbc597945c12b5689dd&languaje=es-MX&page=${pagina}`);
      if(respuesta.status === 200) {
        return await respuesta.json();
      }
    }catch(error: any) {
      throw new Error(error);
    }
  }
}
