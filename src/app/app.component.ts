import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task_mate';
  darkMode:any

  constructor(private store: Store<{darkMode: boolean}>){
    this.darkMode = store.select('darkMode')
    console.log(this.darkMode)
  }
  
}

