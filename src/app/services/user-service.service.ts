import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../models/user';
import { BehaviorSubject } from 'rxjs';
import { transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private HttpClient:HttpClient) { }

  private userSubject= new BehaviorSubject<user|null>(null)
  user$=this.userSubject.asObservable();

  private url = 'http://localhost:8080/user/user';
  private url2= 'http://localhost:8080/user/transactions';

  loadUserData(){
    return this.HttpClient.get<user>(this.url).subscribe(user=>{
      this.userSubject.next(user)
    })
  }
  loadTransactions(){
    return this.HttpClient.get<transaction[]>(this.url2)
  }
}
