import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss'],
})
export class ThemeSwitchComponent {
  checked: boolean = false;
  @Output() darkMode = new EventEmitter<boolean>(false)

  setDarkMode() {
    this.checked = !this.checked;
    this.darkMode.emit(this.checked)
  }
}
