import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/core/services/localstorage.service';
import { UserService } from 'src/app/core/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title: any;
  value: any;
  role: string = this.ls.getRole() as string
  totalUser: any;
  totalExam: any;
totalExamOfUser: any;
  constructor(private ls: LocalstorageService, private userService: UserService) { }

  ngOnInit(): void {
    this.getUserAvgScore();
    this.getUser();
    this.getExam()
  }
  getUserAvgScore() {
    this.userService.getUserAvgScore().subscribe({
      next: (response: any) => {
        if(response.status){
          this.value = response.content[0].averageScore;
          this.totalExamOfUser=response.content[0].exams.length;
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
          text: "Something Went Wrong..",
        });
      }
    })
  }
  getUser(){
    this.userService.getAllUser().subscribe({
      next: (response: any) => {
        if(response.status){
          this.totalUser = response.content.length;
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
          text: "Something Went Wrong..",
        });
      }
    })
  }

  getExam(){
    this.userService.getExams().subscribe({
      next: (response: any) => {
        if(response.status){
          this.totalExam = response.content.length;
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
          text: "Something Went Wrong..",
        });
      }
    })
  }
  
}
