import { Component } from "@angular/core";
import {
  FormGroup,
  FormArray,
  FormControl,
  Validators,
  ValidatorFn,
  AbstractControl,
  ValidationErrors
} from "@angular/forms";

@Component({
  selector: "app-array1",
  templateUrl: "./array1.component.html",
  styleUrls: ["./array1.component.css"]
})
export class Array1Component {

  pizzaForm = new FormGroup({
    ingredientsList: new FormArray([
      new FormControl('Ceba', [Validators.required]),
      new FormControl('Gorgonzola', [Validators.required]),
      new FormControl('Bacon', [Validators.required]),
      new FormControl('', [Validators.required])
    ])
  });

  get ingredients() {
    return this.pizzaForm.get('ingredientsList') as FormArray;
  }

}
