import { transaction } from './../../models/transaction';
import { Component } from '@angular/core';
import { MainLayoutComponent } from '../../components/layouts/main-layout/main-layout.component';
import { UserServiceService } from '../../services/user-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-transaction-history',
  standalone: true,
  imports: [MainLayoutComponent],
  templateUrl: './transaction-history.component.html',
  styleUrl: './transaction-history.component.scss',
})
export class TransactionHistoryComponent {
  constructor(private userService: UserServiceService) {}

  transactions$= new Observable<transaction[]>();
  showHideBalance() {}

  ngOnInit(): void {
   this.transactions$ = this.userService.loadTransactions()
   
  }

}
