import { Injectable } from '@angular/core';
import { SuperHero } from 'src/models/super-hero';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {

  constructor() { }

  public getSuperHero(): SuperHero[]{
    let hero = new SuperHero();
    hero.id=1;
    hero.firstName="Ahmed";
    hero.lastName="AboAlata";
    hero.palce="Qwesna";
    hero.name="eng";
    return [hero];
  }
}
