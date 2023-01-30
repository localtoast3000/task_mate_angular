import { Component, Input, HostBinding } from '@angular/core';
import { TaskInterface } from './types';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
})
export class TaskCardComponent {
  @Input() task: TaskInterface | null = null;
  @Input() bottomMargin: string = '0px';
}
