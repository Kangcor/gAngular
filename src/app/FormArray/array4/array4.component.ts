import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: "app-array4",
  templateUrl: "./array4.component.html",
  styleUrls: ["./array4.component.css"]
})
export class Array4Component {

  objectiveForm = {
    customer: {
      name: 'Mario',
      surname: 'Rossi',
      age: 32,
      address: [
        {
          street: 'Sicilia',
          number: '91-97',
          city: 'Barcelona',
        },
        {
          street: 'Urquinaona',
          number: '6',
          city: 'Barcelona',
        }
      ],
    },
    orders: [
      {
        number: 1,
        name: 'Pizza',
        ingredients: [
          'Tomate',
          'Gorgonzola',
          'Bacon',
          'Pulled pork'
        ]
      },
      {
        number: 2,
        name: 'Nuggets',
        ingredients: [
          'Nuggets',
          'BBQ',
        ]
      }
    ]
  };

  constructor(private fb: FormBuilder) {}

  myForm = this.fb.group({});

}
