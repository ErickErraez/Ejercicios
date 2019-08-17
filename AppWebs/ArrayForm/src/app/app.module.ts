import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent} from './login/login.component';
import { FormRegistroBankComponent } from './form-registro-bank/form-registro-bank.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GeneratePdfComponent } from './generate-pdf/generate-pdf.component';

@NgModule({
  declarations: [
    AppComponent,
    FormRegistroBankComponent,
    LoginComponent,
    GeneratePdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
