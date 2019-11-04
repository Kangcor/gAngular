import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html'
})
export class Form2Component {

  // FormControl('state', 'validators', 'async validators');
  nameControl = new FormControl('', [Validators.required]);

}
