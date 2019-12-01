import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-group2',
  templateUrl: './group2.component.html',
  styleUrls: ['./group2.component.css']
})
export class Group2Component implements OnInit {
  myForm = new FormGroup({
    text: new FormControl('', []),
    checkbox: new FormControl(false, []),
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

    this.myForm.valueChanges.subscribe((change: any) => {
      console.log('my Form value changes', change);
    });
  }

  setDefaultValue() {
    const defaultForm = {
      text: 'Batman',
      checkbox: true,
    };
    this.myForm.setValue(defaultForm);
  }

  supermanSucks(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.get('text').value === 'Superman' && control.get('checkbox').value) {
        return {supermanSucks: true};
      } else {
        return null;
      }
    }
  }
}
