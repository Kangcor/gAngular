import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html'
})
export class Form1Component {

  nameControl = new FormControl('');

}
