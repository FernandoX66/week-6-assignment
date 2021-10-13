import { Directive } from '@angular/core';
import {
  FormControl,
  NG_VALIDATORS,
  Validator,
  ValidatorFn,
} from '@angular/forms';

@Directive({
  selector: '[appNumericValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useClass: NumericValidatorDirective,
      multi: true,
    },
  ],
})
export class NumericValidatorDirective implements Validator {
  validator: ValidatorFn;
  constructor() {
    this.validator = this.numericValidator();
  }

  validate(c: FormControl) {
    return this.validator(c);
  }

  numericValidator(): ValidatorFn {
    return (control) => {
      if (control.value != null && control.value !== '') {
        const numericFormat = /^[0-9]*$/;
        const isValid = numericFormat.test(control.value);
        if (isValid) {
          return null;
        } else {
          return {
            numericValidator: { valid: false },
          };
        }
      } else {
        return null;
      }
    };
  }
}
