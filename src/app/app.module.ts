import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { NavComponent } from './nav/nav.component';
import { UrlValidatorDirective } from './directives/url-validator.directive';
import { DateValidatorDirective } from './directives/date-validator.directive';
import { PasswordValidatorDirective } from './directives/password-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NavComponent,
    UrlValidatorDirective,
    DateValidatorDirective,
    PasswordValidatorDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
