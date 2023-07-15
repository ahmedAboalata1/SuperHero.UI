import { Component } from '@angular/core';
import { SuperHero } from 'src/models/super-hero';
import { SuperHeroService } from 'src/services/super-hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SuperHero.UI';
  heroes: SuperHero[]=[];
  /**
   *
   */
  constructor(private superheroservice:SuperHeroService) {}
  ngOnInit():void{
    this.heroes=this.superheroservice.getSuperHero();
  }
}
