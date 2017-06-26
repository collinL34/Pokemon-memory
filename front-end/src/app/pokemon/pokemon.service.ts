import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PokemonService {
  clicks = 0;
  lastPokemon : string = undefined;
  firstImg : string = undefined;
  compImg : string = undefined;

  constructor(private http: Http) { }

   get() {
    return this.http.get('http://localhost:3000/pokemon')
    .map((res: Response) => res.json());
   };

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
  };

  correct(img1, img2) {
    return (img1 === img2);
  }

}
