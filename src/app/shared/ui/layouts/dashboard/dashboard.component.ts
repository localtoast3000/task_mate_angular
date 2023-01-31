import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  isDarkMode = false;

  setDarkMode($event: boolean) {
    this.isDarkMode = $event;
  }

  @HostBinding('class')
  get classBinding() {
    return [this.isDarkMode ? 'dark-theme' : 'light-theme', 'mat-typography'];
  }
}
