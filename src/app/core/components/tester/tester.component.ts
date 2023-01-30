import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import { setDarkMode } from '../toolbar/toolbar.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.scss']
})
export class TesterComponent {
  darkMode$: Observable<boolean>

  constructor(private store: Store<{darkMode: boolean}>){
    this.darkMode$ = store.select('darkMode')
  }

  setDarkMode(){
    this.store.dispatch(setDarkMode())
  }
}
