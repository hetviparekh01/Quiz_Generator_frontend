import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userData:any;
  constructor(private userService:UserService,private router:Router){}
  ngOnInit(): void {
    this.getParticularUser()
  }

  getParticularUser(){
    this.userService.getParticularUser().subscribe({
      next:(response:any)=>{
        if(response.status){
          this.userData=response.content
        }else{
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: response.content,
          });
        }
      },
      error:(error)=>{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    })
  }
  updateuserData() {
      this.router.navigate([`/user/updateprofile/${this.userData._id}`])
  }
}
