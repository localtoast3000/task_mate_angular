import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss'],
})
export class ThemeSwitchComponent {
  checked: boolean = false;

  toggleChecked() {
    this.checked = !this.checked;
  }
}
