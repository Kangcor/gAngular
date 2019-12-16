import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-array3',
  templateUrl: './array3.component.html',
  styleUrls: ['./array3.component.css']
})
export class Array3Component {

  pizzaForm = new FormGroup({
    ingredientsList: new FormArray([
      new FormControl("Ceba", [Validators.required]),
      new FormControl("Gorgonzola", [Validators.required]),
      new FormControl("Bacon", [Validators.required]),
      new FormControl("", [Validators.required])
    ], [this.atLeastThreeIngredientsValidator()])
  });

  get ingredients() {
    return this.pizzaForm.get("ingredientsList") as FormArray;
  }

  addIngredient() {
    this.ingredients.push(new FormControl('', [Validators.required]));
  }

  removeIngredient(index) {
    this.ingredients.removeAt(index);
  }

  setFavoritePizza() {
    this.ingredients.setValue([
      'Pulled Kut Ku',
      'Chocobo pops',
      'Jar Jar Brie & Boba Feta mix',
      'Steamed Oddish',
      'Szechuan sauce',
    ]);
  }

  atLeastThreeIngredientsValidator(): ValidatorFn {
    return (control: FormArray): ValidationErrors | null  => {
      if (control && control.controls.length >= 3) {
        return null;
      } else {
        return { atLeastThreeIngredients: control.controls.length };
      }
    }
  }

}
