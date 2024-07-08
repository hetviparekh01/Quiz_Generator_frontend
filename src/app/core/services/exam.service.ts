import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  apiUrl: string = "http://localhost:3000/api/exam/"
  constructor(private http: HttpClient) { }

  generateExam(){
    return this.http.get<any>(`${this.apiUrl}generateexam`)
  }
  submitExam(examId:string,examData:any){
    return this.http.post<any>(`${this.apiUrl}submitexam/${examId}`,examData)
  }
}
