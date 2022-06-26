import { Component, OnInit } from '@angular/core';
import { iRobot } from 'src/app/models/robot.model';
import { RobotStateService } from 'src/app/services/robot-state.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  robots!: Array<iRobot>;
  constructor(private robotState: RobotStateService) {}

  ngOnInit(): void {
    this.robotState.getRobots().subscribe((data) => (this.robots = data));
  }
}
