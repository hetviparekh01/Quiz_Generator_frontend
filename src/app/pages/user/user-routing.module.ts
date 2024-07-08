import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { adminGuard } from 'src/app/core/guards/admin.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo:'profile',
    pathMatch:"full"
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:"updateprofile/:id",
    component:UpdateProfileComponent
  },
  {
    path:"viewuser",
    component:ViewUserComponent,
    canActivate:[adminGuard]
  },
  {
    path:"adduser",
    component:AddUserComponent,
    canActivate:[adminGuard]
  },
  {
    path:"updateuser/:id",
    component:AddUserComponent,
    canActivate:[adminGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
