import { SignupService } from './../../services/signup.service';
import { Component } from '@angular/core';
import { DefaultLoginComponent } from '../../components/layouts/default-login/default-login.component';
import { ToastrService } from 'ngx-toastr';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface SignForm {
  name: FormControl;
  cpf: FormControl;
  email: FormControl;
  keyPix: FormControl;
  password: FormControl;
  type: FormControl;
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    DefaultLoginComponent,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    CommonModule,
    MatDividerModule,
  ],
  providers: [
    SignupService
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  signupform!: FormGroup<SignForm>;
  usertype: string = 'cpf';

  constructor(private formBuilder: FormBuilder, private router: Router, private signupService :SignupService,private toastService: ToastrService) {}

  ngOnInit(): void {
    this.signupform = this.formBuilder.group({
      name: ['', [Validators.required]],
      cpf: ['', [Validators.required, Validators.minLength(11)]],
      email: ['', [Validators.required, Validators.email]],
      keyPix: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      type: ['usuario', []],
    });
  }

  onRadioChange(event: Event) {
    if (this.signupform.value.type === 'lojista') {
      this.usertype = 'cnpj';
      return;
    }
    this.usertype = 'cpf';
  }

  submit() {
    this.signupService.createAccount(this.signupform.getRawValue()).subscribe({
      next: () => (this.toastService.success("cadastro feito com sucesso!"), this.router.navigate([''])),
      error: () => this.toastService.error("Erro inesperado! Tente novamente mais tarde")
    })
    console.log(this.signupform.value);
    console.log(JSON.stringify(this.signupform.getRawValue(), null, 2));
    console.log(this.signupform.valid);
  }
  navigate() {
    this.router.navigate(['']);
  }
}
