import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {Form1Component} from './FormControl/form1/form1.component';
import {Form2Component} from './FormControl/form2/form2.component';
import {Form3Component} from './FormControl/form3/form3.component';
import {Form4Component} from './FormControl/form4/form4.component';
import {Form5Component} from './FormControl/form5/form5.component';
import {Form6Component} from './FormControl/form6/form6.component';
import {Form7Component} from './FormControl/form7/form7.component';
import {HomeComponent} from './home/home.component';
import {ConstraintValidationComponent} from './basics/constraint-validation/constraint-validation.component';
import { PlaygroundComponent } from './FormControl/playground/playground.component';
import { Group1Component } from './FormGroup/group1/group1.component';
import { Group2Component } from './FormGroup/group2/group2.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '0',
    component: ConstraintValidationComponent,
  },
  {
    path: '1',
    component: Form1Component,
  },
  {
    path: '2',
    component: Form2Component,
  },
  {
    path: '3',
    component: Form3Component,
  },
  {
    path: '4',
    component: Form4Component,
  },
  {
    path: '5',
    component: Form5Component,
  },
  {
    path: '6',
    component: Form6Component,
  },
  {
    path: '7',
    component: Form7Component,
  },
  {
    path: '8',
    component: PlaygroundComponent,
  },
  {
    path: '9',
    component: Group1Component,
  },
  {
    path: '10',
    component: Group2Component,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
