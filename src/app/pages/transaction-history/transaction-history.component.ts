import { Component } from '@angular/core';
import { MainLayoutComponent } from "../../components/layouts/main-layout/main-layout.component";

@Component({
  selector: 'app-transaction-history',
  standalone: true,
  imports: [MainLayoutComponent],
  templateUrl: './transaction-history.component.html',
  styleUrl: './transaction-history.component.scss'
})
export class TransactionHistoryComponent {

}
