import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { EditComponent } from './edit/edit.component';



@NgModule({
  declarations: [
    DetailsComponent,
    EditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DetailsModule { }
