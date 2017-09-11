import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentProjectionComponent } from './content-projection.component';
import { FormContentComponent } from './form-content/form-content.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ContentProjectionComponent, FormContentComponent]
})
export class ContentProjectionModule { }
