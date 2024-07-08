import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl: string = "http://localhost:3000/api/user/"
  constructor(private http: HttpClient) { }

  getParticularUser(){
    return this.http.get<any>(`${this.apiUrl}getuser`)
  }
  getUserById(userId:string){
    return this.http.get<any>(`${this.apiUrl}getuserbyid/${userId}`)
  }
  getAllUser(){
    return this.http.get<any>(`${this.apiUrl}getalluser`)
  }
  updateUser(userData:IUser){
    return this.http.put<any>(`${this.apiUrl}updateuser`,userData)
  }
  updateUserByAdmin(userId:string,userData:IUser){
    return this.http.put<any>(`${this.apiUrl}updateuser/${userId}`,userData)
  }
  deleteUserByAdmin(userId:string){
    return this.http.delete<any>(`${this.apiUrl}deleteuser/${userId}`)
  }
  getUserAvgScore(){
    return this.http.get<any>(`${this.apiUrl}getavgscore`)
  }
  getExams(){
    return this.http.get<any>(`${this.apiUrl}getallexam`)
  }
  
}
