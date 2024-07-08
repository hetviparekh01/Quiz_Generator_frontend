import { Component, OnInit } from '@angular/core';
import { Exam, Question } from 'src/app/core/interfaces/IExam';
import { ExamService } from 'src/app/core/services/exam.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-exam',
  templateUrl: './view-exam.component.html',
  styleUrls: ['./view-exam.component.scss']
})
export class ViewExamComponent implements OnInit {

  exam: Exam = {
    examId: '',
    questions: [],
    previousScore: 0,
    message: ''
  };
  answerData: any
  submittedAnswers: string[] = [];
  isSubmit: boolean = false;
  ngOnInit(): void {
    this.generateExam();
  }
  constructor(private examService: ExamService) { }

  generateExam() {
    this.examService.generateExam().subscribe({
      next: (response: any) => {
        this.exam = response.content
        this.submittedAnswers = new Array(this.exam.questions.length).fill('');
      },
      error: (error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.error,
        });
      }
    })
  }
  submitExam() {
    const submittedAnswersFormatted = this.exam.questions.map((question: Question, index) => ({
      queId: question.queId,
      answer: this.submittedAnswers[index] || ''
    }));
    this.answerData = { questiones: submittedAnswersFormatted }
    this.examService.submitExam(this.exam.examId, this.answerData).subscribe({
      next: (response: any) => {
        if (response.status) {
          if (response.content.score === 0) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              html: `Your Score for this exam:${response.content.score}`,
            });
          } else {
            Swal.fire({
              icon: "success",
              title: "Total Score For this Exam",
              text: response.content.score,
              showConfirmButton: false,
              timer: 4000
            });
            this.generateExam()
          }
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            html: `Your Score for this exam:${response.content}`,
          });
        }
      },
      error: (error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.error,
        });
      }
    })
  }

  selectAnswer(questionIndex: number, selectedOption: string) {
    this.submittedAnswers[questionIndex] = selectedOption;
  }
  areAllQuestionsAnswered() {

    for (let i = 0; i < this.exam.questions.length; i++) {
      if (this.submittedAnswers[i] === null) {
        this.isSubmit = true
      }
    }
    this.isSubmit = false
  }
}
