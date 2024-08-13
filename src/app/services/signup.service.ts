import { SignupData } from './../models/signupData';
import { user} from './../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SignupService {

  constructor(private HttpClient: HttpClient) { }

  private url ='http://localhost:8080/user/'

  createAccount(signupform:SignupData){
   return this.HttpClient.post(this.url,signupform);
  }
}
