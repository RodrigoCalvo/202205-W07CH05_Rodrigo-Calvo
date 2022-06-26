import { Component, Input, OnInit } from '@angular/core';
import { iRobot } from 'src/app/models/robot.model';
import { RobotStateService } from 'src/app/services/robot-state.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() robot!: iRobot;

  constructor(private robotState: RobotStateService) {}

  ngOnInit(): void {}

  deleteHandle(): void {
    //this.robotState.deleteRobot(this.robot._id as string);
  }
}
