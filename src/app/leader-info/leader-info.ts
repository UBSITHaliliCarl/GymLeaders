import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-leader-info',
  standalone: true,
  imports: [],
  templateUrl: './leader-info.html',
  styleUrl: './leader-info.css',
})
export class LeaderInfo {
  @Input({ required: true }) leader!: any;
  @Input() cardBorderColor: string = '#4a90e2';
  @Input() titleColor: string = '#004a99';
  @Input() buttonColor: string = '#4a90e2';

  showDescription = signal<boolean>(false);

  toggleDescription(): void {
    this.showDescription.update(value => !value);
  }
}
