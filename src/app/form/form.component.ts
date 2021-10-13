import { Component, OnInit } from '@angular/core';
import { Countries } from '../interfaces/countries.interface';
import { Country } from '../interfaces/country.interface';
import { State } from '../interfaces/state.interface';
import { states } from '../interfaces/states.interface';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  countriesList: Country[] = [];
  statesList: State[] = [];
  filteredStates: State[] = [];

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.getCountries().subscribe((response: Countries) => {
      this.countriesList = response.countries;
    });

    this.appService.getStates().subscribe((response: states) => {
      this.statesList = response.states;
    });
  }

  filterStates(countryId: number): void {
    this.filteredStates = this.statesList.filter(
      (state: State) => state.id_country == countryId
    );
  }

  submit(ngForm: any): void {
    console.log(ngForm.value);
  }
}
