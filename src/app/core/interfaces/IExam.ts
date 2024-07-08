export interface Exam {
    examId: string;
    questions: Question[];
    previousScore: number;
    message: string;
  }
  
  export interface Question {
    queId: string;
    question: string;
    options: string[];
  }