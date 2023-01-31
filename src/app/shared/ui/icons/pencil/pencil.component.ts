import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pencil-icon',
  templateUrl: './pencil.component.html',
  styleUrls: ['./pencil.component.scss'],
})
export class PencilComponent {
  @Input() color: string = 'black';
  @Input() scale: number = 0.8;
}
