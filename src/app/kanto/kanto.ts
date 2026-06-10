import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { LeaderInfo } from '../leader-info/leader-info';

@Component({
  selector: 'app-kanto',
  standalone: true,
  imports: [LeaderInfo],
  templateUrl: './kanto.html',
  styleUrl: './kanto.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Kanto {
  leaders = signal([
    { name: 'Brock', age: 15, city: 'Pewter City', badge: 'Boulder Badge', desc: 'The Rock-Solid Pokémon Trainer.', badgeIcon: '🎖️', team: [{ name: 'Geodude', level: 12 }, { name: 'Onix', level: 14 }] },
    { name: 'Misty', age: 13, city: 'Cerulean City', badge: 'Cascade Badge', desc: 'The Tomboyish Mermaid.', badgeIcon: '🎖️', team: [{ name: 'Staryu', level: 18 }, { name: 'Starmie', level: 21 }] },
    { name: 'Lt. Surge', age: 34, city: 'Vermilion City', badge: 'Thunder Badge', desc: 'The Lightning American.', badgeIcon: '🎖️', team: [{ name: 'Voltorb', level: 21 }, { name: 'Pikachu', level: 18 }, { name: 'Raichu', level: 24 }] },
    { name: 'Erika', age: 19, city: 'Celadon City', badge: 'Rainbow Badge', desc: 'The Nature-Loving Princess.', badgeIcon: '🎖️', team: [{ name: 'Victreebel', level: 29 }, { name: 'Tangela', level: 24 }, { name: 'Vileplume', level: 29 }] },
    { name: 'Koga', age: 38, city: 'Fuchsia City', badge: 'Soul Badge', desc: 'The Poisonous Ninja Master.', badgeIcon: '🎖️', team: [{ name: 'Koffing', level: 37 }, { name: 'Muk', level: 39 }, { name: 'Weezing', level: 43 }] },
    { name: 'Sabrina', age: 21, city: 'Saffron City', badge: 'Marsh Badge', desc: 'The Master of Psychic Pokémon.', badgeIcon: '🎖️', team: [{ name: 'Kadabra', level: 38 }, { name: 'Mr. Mime', level: 37 }, { name: 'Alakazam', level: 43 }] },
    { name: 'Blaine', age: 55, city: 'Cinnabar Island', badge: 'Volcano Badge', desc: 'The Hotheaded Quiz Master.', badgeIcon: '🎖️', team: [{ name: 'Growlithe', level: 42 }, { name: 'Ponyta', level: 40 }, { name: 'Magmar', level: 47 }] },
    { name: 'Giovanni', age: 42, city: 'Viridian City', badge: 'Earth Badge', desc: 'The Self-Proclaimed Top Trainer.', badgeIcon: '🎖️', team: [{ name: 'Rhyhorn', level: 45 }, { name: 'Nidoking', level: 45 }, { name: 'Rhydon', level: 50 }] }
  ]);
}
