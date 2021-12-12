import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import {FormControl} from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


export interface State {
  flag: string;
  name: string;
  population: string;
}

export interface DivComponents {
  tagContent: any;
  header: string;
  tag: string;
  description: string;
  sourceCode: string;
  width: string;
}



@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css'],
})
export class ComponentsComponent {
  
  divs: DivComponents[] = [
    {
      tagContent: `
      <mat-icon>favorite</mat-icon>
      <mat-card>
      <mat-card-header>
        <img mat-card-avatar src="./assets/user.jpg" />
        <mat-card-subtitle> Yesterday </mat-card-subtitle>
        <mat-card-title>Юи Хирасава</mat-card-title>
      </mat-card-header>
      <img mat-card-image src="assets/1.jpg" />
      <mat-card-content>
        <p>
          Piqued favour stairs it enable exeter as seeing. Remainder met
          improving but engrossed sincerity age. Better but length gay
          denied abroad are. Attachment astonished to on appearance
          imprudence so collecting in excellence. Tiled way blind lived
          whose new. The for fully had she there leave merit enjoy forth.
        </p>
      </mat-card-content>
      <mat-divider></mat-divider>
      <mat-card-actions>
        <div fxLayout="row">
          <button mat-icon-button>
            <mat-icon>share</mat-icon>
          </button>
          <button mat-icon-button>
            <mat-icon>favorite</mat-icon>
          </button>
          <span fxFlex></span>
          <button mat-button>More Info</button>
          <button mat-button>Save as</button>
        </div>
      </mat-card-actions>
    </mat-card>`,
      header: 'Tooltip',
      tag: 'mat-snack-bar',
      description: 'Tooltips identify an element when they are activated. They may contain brief helper text about its function. For example, they may contain text information about actionable icons. Tooltip labels do not receive input focus.',
      sourceCode: '<button mat-icon-button matTooltip="Favorite this"><mat-icon>favorite</mat-icon></button>',
      width: '4'
    }
  ] 







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

  
  constructor() {
    this.filteredStates = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(state => (state ? this._filterStates(state) : this.states.slice())),
    );
  }

  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.name.toLowerCase().includes(filterValue));
  }


  // ngOnInit(): void {}
}
