import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-form6',
  templateUrl: './form6.component.html',
  styleUrls: ['./form6.component.css']
})
export class Form6Component {

  mockObj1 = { text: 'Opción 1', value: '1', pippo: 'Mario' };
  mockObj2 = { text: 'Opción 2', value: '2', pippo: 'Luigi' };
  mockObj3 = { text: 'Opción 3', value: '3', pippo: 'Peach' };
  NUMERIC_PATTERN = '[0-9]+';

  textControl = new FormControl('', [
    Validators.required,
    Validators.minLength(7),
    Validators.pattern(this.NUMERIC_PATTERN),
  ]);
  numberControl = new FormControl('', [Validators.min(20), Validators.max(40)]);
  checkboxControl = new FormControl('', []);
  radioControl = new FormControl('', []);
  simpleSelectControl = new FormControl('', [Validators.required]);
  valueSelectControl = new FormControl('', []);
  objSelectControl = new FormControl('', []);


}
