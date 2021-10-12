import { Directive } from '@angular/core';
import {
  FormControl,
  NG_VALIDATORS,
  Validator,
  ValidatorFn,
} from '@angular/forms';

@Directive({
  selector: '[appUrlValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useClass: UrlValidatorDirective,
      multi: true,
    },
  ],
})
export class UrlValidatorDirective implements Validator {
  validator: ValidatorFn;
  constructor() {
    this.validator = this.urlValidator();
  }

  validate(c: FormControl) {
    return this.validator(c);
  }

  urlValidator(): ValidatorFn {
    return (control) => {
      if (control.value != null && control.value !== '') {
        let urlFormat =
          /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
        let isValid = urlFormat.test(control.value);

        if (isValid) {
          return null;
        } else {
          return {
            urlValidator: { valid: false },
          };
        }
      } else {
        return null;
      }
    };
  }
}
