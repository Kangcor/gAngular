import { Component, OnInit } from "@angular/core";
import { FormGroup, FormArray, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-array2",
  templateUrl: "./array2.component.html",
  styleUrls: ["./array2.component.css"]
})
export class Array2Component {

  pizzaForm = new FormGroup({
    ingredientsList: new FormArray([
      new FormControl("Ceba", [Validators.required]),
      new FormControl("Gorgonzola", [Validators.required]),
      new FormControl("Bacon", [Validators.required]),
      new FormControl("", [Validators.required])
    ])
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

  /*
    FormArray useful methods
    .at(index)        Get the AbstractControl at the given index in the array.
    .insert(element)  Insert a new AbstractControl at the given index in the array.
    .clear()          Remove all controls in the FormArray.
  */
}
