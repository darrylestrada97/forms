import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
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
  validate(formFieldToValidate: AbstractControl) {

    let ret = formFieldToValidate.value && (formFieldToValidate.value.length > 30 || formFieldToValidate.value.split(" ").length > 4)?  {'isNotCorrect' : true} : null

    return ret
  }

}
