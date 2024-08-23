import { environment } from '../../environments/environment';
import { SignupData } from './../models/signupData';
import { user} from './../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SignupService {

  constructor(private HttpClient: HttpClient) { }

   private url=environment.api;
  
  createAccount(signupform:SignupData){
   return this.HttpClient.post(`${this.url}/`,signupform);
  }
}
