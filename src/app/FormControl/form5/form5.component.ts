import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-form5',
  templateUrl: './form5.component.html',
  styleUrls: ['./form5.component.css']
})
export class Form5Component {

  textControl = new FormControl('', []);
  numberControl = new FormControl('', []);
  checkboxControl = new FormControl('', []);
  radioControl = new FormControl('', []);
  simpleSelectControl = new FormControl('', []);
  valueSelectControl = new FormControl('', []);
  objSelectControl = new FormControl('', []);

  mockObj1 = { text: 'Opción 1', value: '1', pippo: 'Mario' };
  mockObj2 = { text: 'Opción 2', value: '2', pippo: 'Luigi' };
  mockObj3 = { text: 'Opción 3', value: '3', pippo: 'Peach' };

}
