import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'applogin',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailExpresion: any = /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  passwordExpression: any = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{5,8}/;
  loginForm: FormGroup;

  constructor(private route: Router) {
    this.loginForm = this.creteFormGroup();
  }

  ngOnInit() {
  }
  clearForm() {
    this.loginForm.reset()
  }
  validar() {
    if (this.loginForm.valid) {
      this.route.navigate(['/form']);
    }
    else {
      console.log("No valido");
    }

  }
  creteFormGroup() {
    return new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailExpresion)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.passwordExpression)]),
      mensaje: new FormControl('', [Validators.required, Validators.minLength(20), Validators.maxLength(100)])

    });
  }
  get nombre() {
    return this.loginForm.get('nombre');
  }
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password')
  }

  get mensaje() {
    return this.loginForm.get('mensaje');
  }

}
