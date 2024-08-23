import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../models/user';
import { BehaviorSubject } from 'rxjs';
import { transaction } from '../models/transaction';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private HttpClient:HttpClient) { }

  private userSubject= new BehaviorSubject<user|null>(null)
  user$=this.userSubject.asObservable();

  private url=environment.api;

  loadUserData(){
    return this.HttpClient.get<user>(`${this.url}/user`).subscribe(user=>{
      this.userSubject.next(user)
    })
  }
  loadTransactions(){
    return this.HttpClient.get<transaction[]>(`${this.url}/transactions`)
  }
}
