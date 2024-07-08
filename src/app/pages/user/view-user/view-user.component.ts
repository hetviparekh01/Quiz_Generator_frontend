import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef } from 'ag-grid-community';
import { UserService } from 'src/app/core/services/user.service';
import { CustomRenderComponent } from 'src/app/shared/custom-render/custom-render.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
 
  rowData: any;
  constructor(private userService:UserService,private router:Router){}
  ngOnInit(): void {
    this.getUser()
  }
  columnDefs:ColDef[]=[
    { headerName: 'Name', field: 'name',flex:4 },
    { headerName: 'Email', field: 'email',flex:4 },
    { headerName: 'Aole', field: 'role',flex:4 },
    { headerName: 'Action', field: '',flex:4 ,cellRenderer:CustomRenderComponent,cellRendererParams:{
      deleteData:(id:string)=>this.deleteUser(id),
      updateData:(id:string)=>this.updateUser(id)
    }},

  ];
  updateUser(id: string) {
    this.router.navigate([`/user/updateuser/${id}`])
  }
  deleteUser(id: string) {
    this.userService.deleteUserByAdmin(id).subscribe({
      next: (response: any) => {
        if (response.status) {
          Swal.fire({
            icon: "success",
            title: response.content,
            showConfirmButton: false,
            timer: 1500
          });
          this.getUser()
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: response.content,
          });
        }
      },
      error: (error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    })
  }
  getUser(){
    this.userService.getAllUser().subscribe({
      next:(response:any)=>{
        if(response.status){
          this.rowData=response.content
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
}
