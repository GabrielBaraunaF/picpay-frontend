import { AuthService } from './../../services/AuthService.service';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DefaultLoginComponent } from '../../components/layouts/default-login/default-login.component';
import {
  FormControl,
  FormGroup,
  FormRecord,
  ReactiveFormsModule,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    DefaultLoginComponent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
  ],
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginform: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toastService: ToastrService
  ) {}

  ngOnInit(): void {
    this.loginform = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  submit() {
    this.authService.login(this.loginform).subscribe({
      next: () => this.router.navigate(['home']),
      error: () => this.toastService.error("credencial invalidas")
    });
    console.log(this.loginform.value);
    console.log(this.loginform.valid);
  }
  navigate() {
    this.router.navigate(['signup']);
  }
}
