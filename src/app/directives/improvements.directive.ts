import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl }
  from '@angular/forms';

@Directive({
  selector: '[appImprovements]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ImprovementsDirective,
    multi: true
  }]
})
export class ImprovementsDirective {

  TEXT_AREA = /^[a-zA-Z ,.]+$/;

  constructor() { }

  validate(formFieldToValidate: AbstractControl): { [key: string]: any } {
    let validInput: boolean = false;

    if (formFieldToValidate && formFieldToValidate.value) {
      validInput = this.TEXT_AREA.test(formFieldToValidate.value);
    }

    return validInput ? null : { 'isNotCorrect': true };
  }
}
