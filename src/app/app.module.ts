import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { NavComponent } from './nav/nav.component';
import { UrlValidatorDirective } from './directives/url-validator.directive';
import { DateValidatorDirective } from './directives/date-validator.directive';
import { PasswordValidatorDirective } from './directives/password-validator.directive';
import { CapitalValidatorDirective } from './directives/capital-validator.directive';
import { NumericValidatorDirective } from './directives/numeric-validator.directive';
import { AppService } from './services/app.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NavComponent,
    UrlValidatorDirective,
    DateValidatorDirective,
    PasswordValidatorDirective,
    CapitalValidatorDirective,
    NumericValidatorDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
