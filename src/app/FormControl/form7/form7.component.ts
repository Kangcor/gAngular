import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form7',
  templateUrl: './form7.component.html',
  styleUrls: ['./form7.component.css']
})
export class Form7Component implements OnInit {

  textControl = new FormControl('', []);
  checkboxControl = new FormControl(false, []);

  ngOnInit() {
    this.textControl.valueChanges.subscribe((value: string) => {
      console.log('text control value changes', value);
    });

    this.checkboxControl.valueChanges.subscribe((value: string) => {
      if (value) {
        this.textControl.setValidators([Validators.required]);
        this.textControl.updateValueAndValidity();
      } else {
        this.textControl.clearValidators();
        this.textControl.updateValueAndValidity();
      }
      console.log('checkbox control value changes', value);
    });
  }
}
