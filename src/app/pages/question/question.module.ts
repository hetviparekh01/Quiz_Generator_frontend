import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionRoutingModule } from './question-routing.module';
import { ViewQuestionComponent } from './view-question/view-question.component';
import { GenerateQuestionComponent } from './generate-question/generate-question.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ViewQuestionComponent,
    GenerateQuestionComponent
  ],
  imports: [
    CommonModule,
    QuestionRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class QuestionModule { }
