import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    HomeComponent,
    AddComponent,
    ListComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
