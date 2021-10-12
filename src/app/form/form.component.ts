import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  sitePattern: RegExp =
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
  validUrl: boolean = false;
  validPasswords: boolean = false;
  validDate: boolean = false;
  countries: string[] = ['El Salvador', 'Belize'];
  elSalvadorStates: string[] = ['Santa Ana', 'Sonsonate', 'San Salvador'];
  belizeStates: string[] = ['Toledo', 'Corozal', 'Cayo'];

  checkUrl(siteUrl: string): void {
    if (this.sitePattern.test(siteUrl)) {
      this.validUrl = true;
    } else {
      this.validUrl = false;
    }
  }

  checkPasswords(password: string, secondPassword: string): void {
    if (password === secondPassword) {
      this.validPasswords = true;
    } else {
      this.validPasswords = false;
    }
  }

  checkDate(date: string): void {
    if (new Date(date) < new Date()) {
      this.validDate = true;
    } else {
      this.validDate = false;
    }
  }

  submit(ngForm: any): void {
    console.log(ngForm.value);
  }
}
