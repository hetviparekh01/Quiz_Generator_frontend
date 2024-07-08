import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  apiUrl: string = "http://localhost:3000/api/question/"
  constructor(private http: HttpClient) { }

  getQuestion(){
    return this.http.get<any>(`${this.apiUrl}getquestion`)
  }
  addQuestion(questionData:any){
    return this.http.post<any>(`${this.apiUrl}addquestion`,questionData)
  }
}
