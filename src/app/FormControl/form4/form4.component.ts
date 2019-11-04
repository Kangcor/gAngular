import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-form4',
  templateUrl: './form4.component.html',
  styles: []
})
export class Form4Component  {

  nameControl = new FormControl('', [Validators.required]);

  get nameHasError() {
    return this.nameControl.invalid && (this.nameControl.dirty || this.nameControl.touched);
  }

  batmanFn() {
    this.nameControl.setValue('Batman');
  }

}
