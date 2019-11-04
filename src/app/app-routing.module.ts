import {RouterModule, Routes} from '@angular/router';
import {Form1Component} from './FormControl/form1/form1.component';
import {NgModule} from '@angular/core';
import {Form2Component} from './FormControl/form2/form2.component';
import {Form3Component} from './FormControl/form3/form3.component';
import {Form4Component} from './FormControl/form4/form4.component';

const routes: Routes = [
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
