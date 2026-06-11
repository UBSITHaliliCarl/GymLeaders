import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Hoenn {
  private hoennLeadersSignal = signal([
    { name: 'Roxanne', age: 16, city: 'Rustboro City', badge: 'Stone Badge', desc: 'The Rock-Loving Honor Student.', badgeIcon: '🪨', team: [{ name: 'Geodude', level: 12 }, { name: 'Nosepass', level: 15 }] },
    { name: 'Brawly', age: 19, city: 'Dewford Town', badge: 'Knuckle Badge', desc: 'A Big Wave in Fighting!', badgeIcon: '🥊', team: [{ name: 'Machop', level: 16 }, { name: 'Makuhita', level: 19 }] },
    { name: 'Wattson', age: 62, city: 'Mauville City', badge: 'Dynamo Badge', desc: 'The Cheerful Electric Master.', badgeIcon: '⚡', team: [{ name: 'Magnemite', level: 22 }, { name: 'Voltorb', level: 20 }, { name: 'Magneton', level: 23 }] },
    { name: 'Flannery', age: 17, city: 'Lavaridge Town', badge: 'Heat Badge', desc: 'One with a Passion Hotter Than Flame.', badgeIcon: '🔥', team: [{ name: 'Magcargo', level: 26 }, { name: 'Slugma', level: 26 }, { name: 'Torkoal', level: 28 }] },
    { name: 'Norman', age: 39, city: 'Petalburg City', badge: 'Balance Badge', desc: 'A Man in Pursuit of Ultimate Power.', badgeIcon: '⚖️', team: [{ name: 'Slaking', level: 28 }, { name: 'Vigoroth', level: 30 }, { name: 'Slaking', level: 31 }] },
    { name: 'Winona', age: 23, city: 'Fortree City', badge: 'Feather Badge', desc: 'The Bird Pokémon Trainer Who Soars Globally.', badgeIcon: '🪶', team: [{ name: 'Swellow', level: 31 }, { name: 'Pelipper', level: 30 }, { name: 'Skarmory', level: 32 }, { name: 'Altaria', level: 33 }] },
    { name: 'Tate & Liza', age: 12, city: 'Mossdeep City', badge: 'Mind Badge', desc: 'The Mystic Twins of Psychic Power.', badgeIcon: '🔮', team: [{ name: 'Lunatone', level: 42 }, { name: 'Solrock', level: 42 }] },
    { name: 'Wallace', age: 26, city: 'Sootopolis City', badge: 'Rain Badge', desc: 'The Artist of Water Paradises.', badgeIcon: '💧', team: [{ name: 'Luvdisc', level: 40 }, { name: 'Whiscash', level: 42 }, { name: 'Sealeo', level: 40 }, { name: 'Crawdaunt', level: 43 }, { name: 'Milotic', level: 43 }] }
  ]);

  getHoennLeaders() {
    return this.hoennLeadersSignal;
  }
}
