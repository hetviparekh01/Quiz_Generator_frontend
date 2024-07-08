import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewExamComponent } from './view-exam/view-exam.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "viewexam",
    component: ViewExamComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamRoutingModule { }
