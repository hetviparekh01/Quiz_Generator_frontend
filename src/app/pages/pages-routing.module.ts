import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { adminGuard } from '../core/guards/admin.guard';

const routes: Routes = [
  {
    path:"",
    loadChildren: () => import('./exam/exam.module').then(m => m.ExamModule),
  },
  {
    path:"user",
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
  },
  {
    path:"question",
    loadChildren: () => import('./question/question.module').then(m => m.QuestionModule),
    canActivate:[adminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
