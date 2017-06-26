import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { PokemonService } from './pokemon.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
  providers: [PokemonService]
})

export class PokemonComponent implements OnInit {
  pokemons;

  constructor(private pokemonService: PokemonService, private http: Http) {};

    ngOnInit() {
      this.pokemonService.get().subscribe(data => this.pokemons = data);
    }

    clicked(event, img) {
      this.pokemonService.clicked(event,img);
    }

}
