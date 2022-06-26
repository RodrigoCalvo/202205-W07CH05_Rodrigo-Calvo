import { Component, OnInit } from '@angular/core';
import { RobotStateService } from 'src/app/services/robot-state.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  show!: boolean;
  name!: string;
  image!: string;
  speed!: number;
  life!: number;
  born!: string;

  constructor(private robotState: RobotStateService) {}

  ngOnInit(): void {
    this.show = false;
    this.name = '';
    this.image = '';
    this.speed = 1;
    this.life = 1;
    this.born = '1900-01-01';
  }
  toggleShow() {
    this.show = !this.show;
  }
  addHandle() {
    //añadir robot con los datos
  }
}
