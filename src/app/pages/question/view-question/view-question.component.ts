import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { QuestionService } from 'src/app/core/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.scss']
})
export class ViewQuestionComponent implements OnInit {
    rowData:any;
    columnDefs:ColDef[]=[
      { headerName: 'Question', field: 'question',flex:4 },
      { headerName: 'Correct Answer', field: 'correctAnswer',flex:3 },
      { headerName: 'difficulty', field: 'difficulty',flex:1 },
    ]
    constructor(private questionService:QuestionService){}
    ngOnInit(): void {
    this.getquestion()
    }
    getquestion(){
      this.questionService.getQuestion().subscribe({
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
