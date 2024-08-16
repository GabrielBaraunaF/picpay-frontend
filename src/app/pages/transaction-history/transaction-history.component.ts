import { transaction } from './../../models/transaction';
import { AfterViewInit, Component, ViewChild, inject } from '@angular/core';
import { MainLayoutComponent } from '../../components/layouts/main-layout/main-layout.component';
import { UserServiceService } from '../../services/user-service.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-transaction-history',
  standalone: true,
  imports: [MainLayoutComponent, MatTableModule, MatSortModule,CommonModule],
  templateUrl: './transaction-history.component.html',
  styleUrl: './transaction-history.component.scss',
})
export class TransactionHistoryComponent {
  constructor(private userService: UserServiceService) {}

  private _liveAnnouncer = inject(LiveAnnouncer);
  transactions$ = new Observable<transaction[]>();
  
  dataSource = new MatTableDataSource<transaction>(); // Tipo correto para dataSource
  displayedColumns: string[] = ['value','payee','payer','date']; // Substitua com suas colunas

  ngOnInit(): void {
    this.transactions$ = this.userService.loadTransactions();
    this.transactions$.subscribe((transactions) => {
      this.dataSource.data = transactions;
      console.log('Dados carregados:', transactions)
    });
  }
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  showHideBalance() {}
}
