import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form5',
  templateUrl: './form5.component.html',
  styleUrls: ['./form5.component.css']
})
export class Form5Component {

  nameControl = new FormControl('', [Validators.required]);

  get nameHasError() {
    return this.nameControl.invalid && (this.nameControl.dirty || this.nameControl.touched);
  }

  batmanFn() {
    this.nameControl.setValue('Batman');
  }

}
