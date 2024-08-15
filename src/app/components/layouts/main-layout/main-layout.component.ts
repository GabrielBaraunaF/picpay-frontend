import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { UserServiceService } from '../../../services/user-service.service';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [MatDivider,MatIconModule,MatTooltipModule,CommonModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

  constructor(private userService: UserServiceService){}

  
  user$=this.userService.user$;

  ngOnInit(): void {
    this.userService.user$.subscribe;
   }
  
  mostrasaldo=true;
  @Output("showHideBalance") OnshowHideBalance = new EventEmitter();

  showHideBalance(){
    this.mostrasaldo=!this.mostrasaldo;
    this.OnshowHideBalance.emit();
    console.log(this.user$)
  }
  

  
  
}
