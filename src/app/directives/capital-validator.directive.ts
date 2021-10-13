import { Directive } from '@angular/core';
import {
  FormControl,
  NG_VALIDATORS,
  Validator,
  ValidatorFn,
} from '@angular/forms';

@Directive({
  selector: '[appCapitalValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useClass: CapitalValidatorDirective,
      multi: true,
    },
  ],
})
export class CapitalValidatorDirective implements Validator {
  validator: ValidatorFn;
  constructor() {
    this.validator = this.capitalValidator();
  }

  validate(c: FormControl) {
    return this.validator(c);
  }

  capitalValidator(): ValidatorFn {
    return (control) => {
      if (control.value != null && control.value !== '') {
        if (control.value.charAt(0) === control.value.charAt(0).toUpperCase()) {
          return null;
        } else {
          return {
            capitalValidator: { valid: false },
          };
        }
      } else {
        return null;
      }
    };
  }
}
