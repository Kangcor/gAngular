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
import { Form5Component } from './FormControl/form5/form5.component';
import { Form6Component } from './FormControl/form6/form6.component';
import { Form7Component } from './FormControl/form7/form7.component';
import { PlaygroundComponent } from './FormControl/playground/playground.component';
import { Group1Component } from './FormGroup/group1/group1.component';
import { Group2Component } from './FormGroup/group2/group2.component';
import { Array1Component } from './FormArray/array1/array1.component';
import { Array2Component } from './FormArray/array2/array2.component';
import { Array3Component } from './FormArray/array3/array3.component';
import { Array4Component } from './FormArray/array4/array4.component';
import { Array5Component } from './FormArray/array5/array5.component';

@NgModule({
  declarations: [
    AppComponent,
    Form1Component,
    Form2Component,
    Form3Component,
    Form4Component,
    HomeComponent,
    ConstraintValidationComponent,
    Form5Component,
    Form6Component,
    Form7Component,
    PlaygroundComponent,
    Group1Component,
    Group2Component,
    Array1Component,
    Array2Component,
    Array3Component,
    Array4Component,
    Array5Component,
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
