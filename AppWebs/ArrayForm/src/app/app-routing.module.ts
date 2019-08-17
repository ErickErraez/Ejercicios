import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormRegistroBankComponent } from './form-registro-bank/form-registro-bank.component';
import { GeneratePdfComponent } from './generate-pdf/generate-pdf.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'form', component: FormRegistroBankComponent },
  { path: 'pdf', component: GeneratePdfComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
