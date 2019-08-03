import { Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Injectable()
export class FormControlValidators {


  constructor() {

  }

  idForm() {
    return new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]*$')]);
  }
  numberForm() {
    return new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]);
  }
  passwordForm(){
    return new FormControl(null, Validators.required);
  }

}
