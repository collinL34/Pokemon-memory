import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemons;

  private shown: string = 'EQUIFAX';

  constructor(private http: Http) {};

    getPokemon() {
      this.http.get('http://localhost:3000/pokemon')
        .subscribe(res => this.pokemons = res.json());
    }

    ngOnInit() {
      this.getPokemon();
    }

    clicked(event, img) {
      return event.target.src = img;
    }
    
}
