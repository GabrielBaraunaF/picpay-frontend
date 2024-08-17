import { Component } from '@angular/core';
import { MainLayoutComponent } from '../../components/layouts/main-layout/main-layout.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { tranfer } from '../../models/transfer';
import { UserServiceService } from '../../services/user-service.service';

interface transferForm {
  keyPix: FormControl;
  value: FormControl;
}

@Component({
  selector: 'app-transfer',
  standalone: true,
  imports: [
    MainLayoutComponent,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    CommonModule,
  ],
  templateUrl: './transfer.component.html',
  providers: [],
  styleUrl: './transfer.component.scss',
})
export class TransferComponent {
  transferForms!: FormGroup<transferForm>;

  constructor(private formBuilder: FormBuilder, private userService:UserServiceService) {}

  ngOnInit(): void {
    this.transferForms = this.formBuilder.group({
      keyPix: ['', [Validators.required]],
      value: ['', [Validators.required]],
    });
  }

  showHideBalance() {}
}
