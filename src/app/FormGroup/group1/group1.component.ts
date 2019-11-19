import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-group1',
  templateUrl: './group1.component.html',
  styleUrls: ['./group1.component.css']
})
export class Group1Component implements OnInit {

  myForm = new FormGroup({
    text: new FormControl('', []),
    checkbox : new FormControl(false, []),
  });

  ngOnInit() {
    this.myForm.get('text').valueChanges.subscribe((value: string) => {
      console.log('text control value changes', value);
    });

    this.myForm.get('checkbox').valueChanges.subscribe((value: string) => {
      if (value) {
        this.myForm.get('text').setValidators([Validators.required]);
        this.myForm.get('text').updateValueAndValidity();
      } else {
        this.myForm.get('text').clearValidators();
        this.myForm.get('text').updateValueAndValidity();
      }
      console.log('checkbox control value changes', value);
    });
  }

}
