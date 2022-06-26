import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { iRobot } from 'src/app/models/robot.model';

@Component({
  selector: 'app-showcard',
  templateUrl: './showcard.component.html',
  styleUrls: ['./showcard.component.scss'],
})
export class ShowcardComponent implements OnInit {
  @Input() robot!: iRobot;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  handleBack() {
    this.router.navigate(['home']);
  }
}
