import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamRoutingModule } from './exam-routing.module';
import { ViewExamComponent } from './view-exam/view-exam.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ViewExamComponent
  ],
  imports: [
    CommonModule,
    ExamRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ExamModule { }
