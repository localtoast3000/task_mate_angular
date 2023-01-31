import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Output() darkMode = new EventEmitter<boolean>(false);

  setDarkMode(val: boolean) {
    this.darkMode.emit(val);
  }
}
