import { Directive } from '@angular/core';
import {
  FormControl,
  NG_VALIDATORS,
  Validator,
  ValidatorFn,
} from '@angular/forms';

@Directive({
  selector: '[appDateValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useClass: DateValidatorDirective,
      multi: true,
    },
  ],
})
export class DateValidatorDirective implements Validator {
  validator: ValidatorFn;
  constructor() {
    this.validator = this.dateValidator();
  }

  validate(c: FormControl) {
    return this.validator(c);
  }

  dateValidator(): ValidatorFn {
    return (control) => {
      if (control.value != null && control.value !== '') {
        let currentDate: Date = new Date();
        let userDate: Date = new Date(control.value);

        if (userDate < currentDate) {
          return null;
        } else {
          return {
            dateValidator: { valid: false },
          };
        }
      } else {
        return null;
      }
    };
  }
}
