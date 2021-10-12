import { Attribute, Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appPasswordValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useClass: PasswordValidatorDirective,
      multi: true,
    },
  ],
})
export class PasswordValidatorDirective implements Validator {
  constructor(
    @Attribute('appPasswordValidator') public passwordControl: string
  ) {}

  validate(c: FormControl) {
    const password = c.root.get(this.passwordControl);
    const passwordConfirmation = c;

    if (passwordConfirmation.value === null) {
      return null;
    }

    if (password) {
      const subscription: Subscription = password.valueChanges.subscribe(() => {
        passwordConfirmation.updateValueAndValidity();
        subscription.unsubscribe;
      });
    }

    return password && password.value !== passwordConfirmation.value
      ? { passwordValidator: { valid: false } }
      : null;
  }
}
