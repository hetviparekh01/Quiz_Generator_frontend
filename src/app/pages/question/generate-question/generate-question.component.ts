import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestionData } from 'src/app/core/interfaces/IQuestionData';
import { QuestionService } from 'src/app/core/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-generate-question',
  templateUrl: './generate-question.component.html',
  styleUrls: ['./generate-question.component.scss']
})
export class GenerateQuestionComponent implements OnInit {

  questionForm!: FormGroup;
  options!: string[];
  questionData!: QuestionData;
  constructor(private fb: FormBuilder, private questionService: QuestionService) { }
  ngOnInit(): void {
    this.questionForm = this.fb.group({
      question: ['', Validators.compose([Validators.required])],
      option1: ['', Validators.compose([Validators.required])],
      option2: ['', Validators.compose([Validators.required])],
      option3: ['', Validators.compose([Validators.required])],
      option4: ['', Validators.compose([Validators.required])],
      correctAnswer: ['', Validators.compose([Validators.required])],
      difficulty: ['', Validators.compose([Validators.required])]
    })
  }


  onSubmit() {
    this.options = [
      this.questionForm.value.option1,
      this.questionForm.value.option2,
      this.questionForm.value.option3,
      this.questionForm.value.option4
    ];
    this.questionData = {
      question: this.questionForm.value.question,
      options: this.options,
      correctAnswer: this.questionForm.value.correctAnswer,
      difficulty: this.questionForm.value.difficulty
    }
    console.log(this.questionData);
    this.questionService.addQuestion(this.questionData).subscribe({
      next: (response: any) => {
        if (response.status) {
          Swal.fire({
            icon: "success",
            title: response.content,
            showConfirmButton: false,
            timer: 1500
          });
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
    this.questionForm.reset()
  }
}
