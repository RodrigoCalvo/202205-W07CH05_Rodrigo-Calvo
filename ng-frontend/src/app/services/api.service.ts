import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iRobot, Robot } from '../models/robot.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:9000/robots/';
  }

  getRobots(): Observable<Array<Robot>> {
    return this.http.get(this.apiUrl) as Observable<Array<Robot>>;
  }

  addRobot(robot: Robot): Observable<Robot> {
    return this.http.post(this.apiUrl, robot) as Observable<Robot>;
  }

  updateRobot(id: iRobot['_id'], robot: Robot): Observable<Robot> {
    return this.http.patch(this.apiUrl + id, robot) as Observable<Robot>;
  }
  deleteRobot(id: iRobot['_id']): Observable<Robot> {
    return this.http.delete(this.apiUrl + id) as Observable<Robot>;
  }
}
