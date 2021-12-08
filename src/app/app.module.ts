import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

import { MatPseudoCheckboxModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule, MatFormField, MatFormFieldControl } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatPseudoCheckboxModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
