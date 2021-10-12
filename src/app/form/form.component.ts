import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  countries: string[] = ['El Salvador', 'Belize'];
  elSalvadorStates: string[] = [
    'Santa Ana',
    'Sonsonate',
    'San Salvador',
    'Usulután',
    'La Unión',
    'San Vicente',
    'San Miguel',
    'La Paz',
    'Morazán',
    'La Libertad',
    'Cuscatlán',
    'Chalatenango',
    'Cabañas',
    'Ahuachapán',
  ];
  belizeStates: string[] = [
    'Toledo',
    'Corozal',
    'Cayo',
    'Belice',
    'Orange Walk',
    'Stann Creek',
  ];

  submit(ngForm: any): void {
    console.log(ngForm.value);
  }
}
