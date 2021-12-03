import { Component, OnInit } from '@angular/core';
import { APIPeliculasService } from './apipeliculas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  Peliculas: any[] = [];
  Elemento: number = 0;
  Pagina: number = 1;
  
  constructor(private API: APIPeliculasService) { }
  
  public async onIntersection({ target, visible }: { target: Element; visible: boolean }) {
    this.Elemento++;
    const peliculas = document.body.querySelectorAll('.pelicula');
    if(this.Elemento > 20 && visible === true && target === peliculas[peliculas.length - 1]) {
      this.Pagina++;
      this.API.getPeliculas(this.Pagina).then(e => {
        this.Peliculas.push(...e.results);
      });
    }
  }
  
  ngOnInit() {
    this.API.getPeliculas(this.Pagina).then(e => {
      this.Peliculas.push(...e.results);
    });
  }
  
}