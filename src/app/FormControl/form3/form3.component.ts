import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styles: []
})
export class Form3Component {

  nameControl = new FormControl('', [Validators.required]);

  get nameHasError() {
    return this.nameControl.invalid && (this.nameControl.dirty || this.nameControl.touched);
  }

}
