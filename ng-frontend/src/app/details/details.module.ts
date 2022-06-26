import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { EditComponent } from './edit/edit.component';
import { DetailsRoutingModule } from './details-routing.module';
import { ShowcardComponent } from './showcard/showcard.component';

@NgModule({
  declarations: [DetailsComponent, EditComponent, ShowcardComponent],
  imports: [CommonModule, DetailsRoutingModule],
})
export class DetailsModule {}
