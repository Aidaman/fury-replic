import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ExampleDialogComponent } from './dialog/example-dialog/example-dialog.component';
import { ExampleSnackbarComponent } from './snackbar/example-snackbar/example-snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface State {
  flag: string;
  name: string;
  population: string;
}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css'],
})

export class ComponentsComponent {
  stateCtrl = new FormControl();
  filteredStates: Observable<State[]>;
  items = [
    'Autocomplete',
    'Buttons',
    'Cards',
    'Checkbox',
    'Dialog',
    'Grid List',
    'Input',
    'List',
    'Menu',
    'Progress',
    'Progress Spinner',
    'Radio',
  ];

  states: State[] = [
    {
      name: 'Arkansas',
      population: '2.978M',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg',
    },
    {
      name: 'California',
      population: '39.14M',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg',
    },
    {
      name: 'Florida',
      population: '20.27M',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg',
    },
    {
      name: 'Texas',
      population: '27.47M',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg',
    },
  ];

  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar) {
    this.filteredStates = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map((state) => (state ? this._filterStates(state) : this.states.slice()))
    );
  }

  durationInSeconds = 2;

  openSnackBar() {
    this._snackBar.openFromComponent(ExampleSnackbarComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  openDialog() {
    this.dialog.open(ExampleDialogComponent);
  }

  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter((state) =>
      state.name.toLowerCase().includes(filterValue)
    );
  }

  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];
  hide = true;

  favoriteSeason?: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  // ngOnInit(): void {}
}
