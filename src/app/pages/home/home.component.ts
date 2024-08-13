import { UserServiceService } from './../../services/user-service.service';
import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { MainLayoutComponent } from '../../components/layouts/main-layout/main-layout.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainLayoutComponent,MatCardModule,MatIconModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private userService:UserServiceService){}

  user$=this.userService.user$

  ngOnInit(): void {
   this.userService.loadUserData();
  }
  saldo='12,3'
  mostrarSaldo=true

  showHideBalance(){
    this.mostrarSaldo=!this.mostrarSaldo
    this.mostrarSaldo? this.saldo='12,3': this.saldo='--'
  }

  
}
