import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { Form1Component } from './FormControl/form1/form1.component';
import {AppRoutingModule} from './app-routing.module';
import {Form2Component} from './FormControl/form2/form2.component';
import { Form3Component } from './FormControl/form3/form3.component';
import { Form4Component } from './FormControl/form4/form4.component';
import { HomeComponent } from './home/home.component';
import { ConstraintValidationComponent } from './basics/constraint-validation/constraint-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    Form1Component,
    Form2Component,
    Form3Component,
    Form4Component,
    HomeComponent,
    ConstraintValidationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
