import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { Routes, RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { Safehtml } from './safehtml.pipe';

import { AllInOneTableComponent } from './tables/all-in-one-table/all-in-one-table.component';
import { CalendarComponent } from './apps/calendar/calendar.component';
import { PrimaryComponent } from './apps/inbox/primary/primary.component';
import { ChatComponent } from './apps/chat/chat.component';
import { ComponentsComponent } from './components/components.component';
import { FormElementsComponent } from './forms/form-elements/form-elements.component';
import { FormWizardComponent } from './forms/form-wizard/form-wizard.component';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { EditorComponent } from './editor/editor.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SimpleComponent } from './page-layouts/simple/simple.component';
import { SimpleTabbedComponent } from './page-layouts/simple-tabbed/simple-tabbed.component';
import { CardComponent } from './page-layouts/card/card.component';
import { CardTabbedComponent } from './page-layouts/card-tabbed/card-tabbed.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { BlankComponent } from './blank/blank.component';
import { GoogleMapsComponent } from './maps/google-maps/google-maps.component';
import { IconsComponent } from './icons/icons.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Level5Component } from './level1/level2/level3/level4/level5/level5.component';
import { ExampleDialogComponent } from './components/dialog/example-dialog/example-dialog.component';
import { ExampleSnackbarComponent } from './components/snackbar/example-snackbar/example-snackbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AllInOneTableComponent,
    CalendarComponent,
    PrimaryComponent,
    ChatComponent,
    ComponentsComponent,
    FormElementsComponent,
    FormWizardComponent,
    DragAndDropComponent,
    EditorComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    SimpleComponent,
    SimpleTabbedComponent,
    CardComponent,
    CardTabbedComponent,
    ComingSoonComponent,
    BlankComponent,
    GoogleMapsComponent,
    IconsComponent,
    DashboardComponent,
    Safehtml,
    Level5Component,
    ExampleDialogComponent,
    ExampleSnackbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatExpansionModule,
    MatDialogModule,
    MatGridListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    RouterModule.forRoot([
      { path: 'dashboard', component: DashboardComponent },
      { path: 'tables/all-in-one-table', component: AllInOneTableComponent },
      { path: 'apps/calendar', component: CalendarComponent },
      { path: 'apps/inbox/primary', component: PrimaryComponent },
      { path: 'apps/chat', component: ChatComponent },
      { path: 'apps/components', component: ComponentsComponent },
      { path: 'forms/form-elements', component: FormElementsComponent },
      { path: 'forms/form-wizard', component: FormWizardComponent },
      { path: 'drag-and-drop', component: DragAndDropComponent },
      { path: 'editor', component: EditorComponent },
      { path: 'login', component: LoginComponent }, // ***
      { path: 'register', component: RegisterComponent }, // ***
      { path: 'forgot-password', component: ForgotPasswordComponent }, // ***
      { path: 'page-layouts/simple', component: SimpleComponent },
      { path: 'page-layouts/simple-tabbed', component: SimpleTabbedComponent },
      { path: 'page-layouts/card', component: CardComponent },
      { path: 'page-layouts/card-tabbed', component: CardTabbedComponent },
      { path: 'coming-soon', component: ComingSoonComponent }, // ***
      { path: 'blank', component: BlankComponent },
      { path: 'maps/google-maps', component: GoogleMapsComponent },
      { path: 'icons', component: IconsComponent },
      { path: 'level1/level2/level3/level4/level5', component: Level5Component },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
