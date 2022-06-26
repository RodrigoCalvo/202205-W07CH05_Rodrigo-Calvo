import { Component, OnInit } from '@angular/core';
import { iMenuOptions, MENU_OPTIONS } from 'src/app/app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuOptions: Array<iMenuOptions>;
  constructor() {
    this.menuOptions = MENU_OPTIONS.filter((opt) => opt.path !== 'details');
  }

  ngOnInit(): void {}
}
