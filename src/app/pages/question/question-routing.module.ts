import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewQuestionComponent } from './view-question/view-question.component';
import { GenerateQuestionComponent } from './generate-question/generate-question.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:"viewquestion",
    pathMatch:"full"
  },
  {
    path:'viewquestion',
    component:ViewQuestionComponent
  },
  {
    path:'generatequestion',
    component:GenerateQuestionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionRoutingModule { }
