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
  lastPokemon : string = undefined;
  firstImg : string = undefined;
  compImg : string = undefined;

  constructor(private http: Http) {};

    getPokemon() {
      this.http.get('http://localhost:3000/pokemon')
        .subscribe(res => this.pokemons = res.json());
    }

    ngOnInit() {
      this.getPokemon();
    }

    clicked(event, img) {
      if (this.clicks < 2 && this.lastPokemon !== img ) {

        if (this.clicks === 0) {
          this.firstImg = img;
        }

        this.lastPokemon = img;
        this.clicks += 1;
        event.target.src = img;
        
        if ( this.clicks >= 2) {

          this.compImg = img;

          console.log( this.correct(this.firstImg, this.compImg) );
          
          setTimeout(() => {
            let imgs = document.querySelectorAll('img');
            [].forEach.call(imgs, function(imgs) {
              imgs.src = 'https://opengameart.org/sites/default/files/card%20back%20red.png';
            });
          }, 1500);
        this.lastPokemon = undefined;
        this.clicks = 0;
        };
      };
    }

    correct(img1, img2) {
      return (img1 === img2);
    }

}
