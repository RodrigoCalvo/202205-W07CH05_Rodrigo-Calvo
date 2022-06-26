import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { iRobot } from '../models/robot.model';
import { RobotStateService } from '../services/robot-state.service';

@Component({
  selector: 'app-details',
  template: ` <app-showcard [robot]="robot"></app-showcard> `,
  styles: [],
})
export class DetailsComponent implements OnInit {
  id!: string;
  robot!: iRobot;
  constructor(
    private robotState: RobotStateService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'] as string;
    this.robotState
      .getRobots()
      .subscribe(
        (data) =>
          (this.robot = data.find((item) => item._id === this.id) as iRobot)
      );
  }
}
