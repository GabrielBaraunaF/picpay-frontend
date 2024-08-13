import { Component, EventEmitter, Output } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [MatDivider,MatIconModule,MatTooltipModule,CommonModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
  username='gabriel'
  mostrasaldo=true;
  @Output("showHideBalance") OnshowHideBalance = new EventEmitter();

  showHideBalance(){
    this.mostrasaldo=!this.mostrasaldo;
    this.OnshowHideBalance.emit();
  }

  
  
}
