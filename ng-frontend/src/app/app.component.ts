import { Component } from '@angular/core';

export interface iMenuOptions {
  path: string;
  label: string;
}

export const MENU_OPTIONS: Array<iMenuOptions> = [
  { path: 'home', label: 'Home' },
  { path: 'details', label: 'Details' },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-frontend';
  menuOptions: Array<iMenuOptions>;
  constructor() {
    this.menuOptions = MENU_OPTIONS;
  }
}
