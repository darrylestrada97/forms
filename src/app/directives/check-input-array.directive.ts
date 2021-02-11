import { Directive } from '@angular/core';
import { AbstractControlDirective, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appCheckInputArray]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CheckInputArrayDirective,
    multi: true
  }]
})
export class CheckInputArrayDirective {

  constructor() { }

  status: boolean = false

  validate(formToValidate: AbstractControlDirective){
    let validInput = false;
    
    return validInput? this.status = true : { 'isNotCorrect': true }
  }

}
