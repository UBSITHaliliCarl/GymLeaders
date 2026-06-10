import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-rules',
  standalone: true,
  imports: [],
  templateUrl: './rules.html',
  styleUrl: './rules.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Rules {
  rules = signal([
    "Challengers must present a valid Trainer ID before battling.",
    "The Gym Leader cannot substitute Pokémon during official badge matches.",
    "Only standard items (e.g., Potions held by Pokémon) are permitted during combat.",
    "Defeating the Gym Leader officially entitles the trainer to the local Gym Badge.",
    "Badge holders gain compliance authority over higher-level traded Pokémon."
  ]);
}
