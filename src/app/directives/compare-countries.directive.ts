import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl }
  from '@angular/forms';

@Directive({
  selector: '[appCompareCountries]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CompareCountriesDirective,
    multi: true
  }]
})
export class CompareCountriesDirective {

  constructor() { }

  validate(formFieldToValidate: AbstractControl): { [key: string]: any } {
    let validInput: boolean = false;
     
    if (formFieldToValidate && formFieldToValidate.value) {
      if((formFieldToValidate.value.firstCountry != formFieldToValidate.value.secondCountry) && (formFieldToValidate.value.searchDate[0] !== formFieldToValidate.value.searchDate[1])){
        validInput = true;

      }
      
    }

    return validInput ? null : { 'isNotCorrect': true };
  }

}
