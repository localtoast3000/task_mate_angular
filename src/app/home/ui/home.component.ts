import { Component } from '@angular/core';
import { TaskInterface } from 'src/app/shared/ui/task-card/types';
import tasks from 'src/assets/dummy_tasks.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  tasks: TaskInterface[] = tasks;

  deleteTask(taskId: number) {
    this.tasks = this.tasks.filter(({ id }) => id !== taskId);
  }
  editTask(taskId: number) {
    console.log(taskId);
  }
}
