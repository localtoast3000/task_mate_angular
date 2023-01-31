import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskInterface } from './types';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
})
export class TaskCardComponent {
  @Input() task: TaskInterface | null = null;
  @Input() bottomMargin: string = '0px';
  @Output() onDeleteClick = new EventEmitter<number>();
  @Output() onEditClick = new EventEmitter<number>();

  deleteClicked(id: any) {
    this.onDeleteClick.emit(id);
  }
  editClicked(id: any) {
    this.onEditClick.emit(id);
  }
}
