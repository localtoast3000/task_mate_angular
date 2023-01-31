import { Component } from '@angular/core';
import tasks from 'src/assets/dummy_tasks.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  tasks = tasks;
}
