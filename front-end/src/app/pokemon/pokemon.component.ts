import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemons;
  clicks = 0;

  constructor(private http: Http) {};

    getPokemon() {
      this.http.get('http://localhost:3000/pokemon')
        .subscribe(res => this.pokemons = res.json());
    }

    ngOnInit() {
      this.getPokemon();
    }

    clicked(event, img) {
      if (this.clicks < 2) {
        this.clicks += 1;
        event.target.src = img;
        if ( this.clicks == 2) {
          setTimeout(() => {
            let imgs = document.querySelectorAll('img');
            [].forEach.call(imgs, function(imgs) {
              imgs.src = 'https://opengameart.org/sites/default/files/card%20back%20red.png';
            });
          }, 1500);
        this.clicks = 0;
        };
      };
    }
    
}
