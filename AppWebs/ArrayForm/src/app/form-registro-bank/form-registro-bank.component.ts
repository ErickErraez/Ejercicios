import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms'
import { Router } from '@angular/router';


@Component({
  selector: 'app-bank',
  templateUrl: './form-registro-bank.component.html',
  styleUrls: ['./form-registro-bank.component.css']
})
export class FormRegistroBankComponent implements OnInit {
  registroForm: FormGroup;
  users: any[] = [];
  expresionE: any = /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  expresionPas: any = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;

  constructor(private Bul: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.registroForm = this.Bul.group({
      autores: this.Bul.array([this.Bul.group({ autores: [] })]),
      titulo: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(6)]],
      editorial: this.Bul.array([this.Bul.group({ editorial: [] })]),
      materia: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16), Validators.pattern(this.expresionPas)]],
    });
  }

  submit() {
this.router.navigate(['/pdf']);
  }
  get getAutores() {
    return this.registroForm.get('autores') as FormArray;
  }


  addAutores() {
    const control = <FormArray>this.registroForm.controls['autores'];
    control.push(this.Bul.group({ telefono: [] }));
  }
  delAutores(index: number) {
    const control = <FormArray>this.registroForm.controls['autores'];
    control.removeAt(index);
  }

  get getEditorial() {
    return this.registroForm.get('editorial') as FormArray;
  }

  addEditorial() {
    const control = <FormArray>this.registroForm.controls['editorial'];
    control.push(this.Bul.group({ telefono: [] }));
  }
  delEditorial(index: number) {
    const control = <FormArray>this.registroForm.controls['editorial'];
    control.removeAt(index);
  }

}
