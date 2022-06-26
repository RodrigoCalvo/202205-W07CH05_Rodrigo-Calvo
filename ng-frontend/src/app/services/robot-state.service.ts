import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { iRobot } from '../models/robot.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class RobotStateService {
  private $robots: BehaviorSubject<Array<iRobot>>;

  constructor(private apiService: ApiService) {
    this.$robots = new BehaviorSubject([] as Array<iRobot>);
  }

  getRobots() {
    this.apiService.getRobots().subscribe((data) => {
      this.$robots.next(data);
    });
    return this.$robots.asObservable();
  }

  deleteRobot(id: string) {
    this.apiService
      .deleteRobot(id)
      .subscribe((data) =>
        this.$robots.next(this.$robots.value.filter((item) => item._id !== id))
      );
  }

  updateRobot(id: iRobot['_id'], robot: iRobot) {
    this.apiService.updateRobot(id, robot).subscribe((data) => {
      this.$robots.next(
        this.$robots.value.map((item) =>
          item._id === robot._id ? robot : item
        )
      );
    });
  }

  addRobot(robot: iRobot) {
    this.apiService.addRobot(robot).subscribe((data) => {
      this.$robots.next([...this.$robots.value, data]);
    });
  }
}
