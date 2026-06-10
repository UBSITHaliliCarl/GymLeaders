import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { LeaderInfo } from '../leader-info/leader-info';

@Component({
  selector: 'app-johto',
  standalone: true,
  imports: [LeaderInfo],
  templateUrl: './johto.html',
  styleUrl: './johto.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Johto {
  leaders = signal([
    { name: 'Falkner', age: 18, city: 'Violet City', badge: 'Zephyr Badge', desc: 'The Elegant Flying-Type User.', badgeIcon: '🛡️', team: [{ name: 'Pidgey', level: 9 }, { name: 'Pidgeotto', level: 13 }] },
    { name: 'Bugsy', age: 12, city: 'Azalea Town', badge: 'Hive Badge', desc: 'The Walking Bug Pokémon Encyclopedia.', badgeIcon: '🛡️', team: [{ name: 'Scyther', level: 17 }, { name: 'Kakuna', level: 15 }, { name: 'Metapod', level: 15 }] },
    { name: 'Whitney', age: 16, city: 'Goldenrod City', badge: 'Plain Badge', desc: 'The Incredibly Pretty Girl.', badgeIcon: '🛡️', team: [{ name: 'Clefairy', level: 18 }, { name: 'Miltank', level: 20 }] },
    { name: 'Morty', age: 24, city: 'Ecruteak City', badge: 'Fog Badge', desc: 'The Mystic Seer of the Future.', badgeIcon: '🛡️', team: [{ name: 'Gastly', level: 21 }, { name: 'Haunter', level: 23 }, { name: 'Gengar', level: 25 }] },
    { name: 'Chuck', age: 35, city: 'Cianwood City', badge: 'Storm Badge', desc: 'His Physical Power Knows No Limits.', badgeIcon: '🛡️', team: [{ name: 'Primeape', level: 29 }, { name: 'Poliwrath', level: 31 }] },
    { name: 'Jasmine', age: 17, city: 'Olivine City', badge: 'Mineral Badge', desc: 'The Steel-Clad Girl with a Tender Heart.', badgeIcon: '🛡️', team: [{ name: 'Magnemite', level: 30 }, { name: 'Steelix', level: 35 }] },
    { name: 'Pryce', age: 70, city: 'Mahogany Town', badge: 'Glacier Badge', desc: 'The Teacher of Winter.', badgeIcon: '🛡️', team: [{ name: 'Seel', level: 30 }, { name: 'Piloswine', level: 34 }] },
    { name: 'Clair', age: 25, city: 'Blackthorn City', badge: 'Rising Badge', desc: 'The Blessed Dragon Pokémon Trainer.', badgeIcon: '🛡️', team: [{ name: 'Dragonair', level: 38 }, { name: 'Kingdra', level: 41 }] }
  ]);
}
