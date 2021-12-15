import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatPseudoCheckboxModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule, MatFormField, MatFormFieldControl } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { Routes, RouterModule } from '@angular/router';
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
import { WriteMessageDialogComponent } from './apps/inbox/write-message-dialog/write-message-dialog.component';

import { ReactiveFormsModule} from "@angular/forms";
import { MatCheckboxModule} from "@angular/material/checkbox";
import { FillerComponent } from './page-layouts/filler/filler.component';
import { MatTabsModule} from "@angular/material/tabs";
import { MatCardModule} from "@angular/material/card";
import { MatMenuModule} from "@angular/material/menu";
import { MatDividerModule} from "@angular/material/divider";
import { MatInputModule} from "@angular/material/input";
import { MatTableModule} from "@angular/material/table";
import { MatSortModule} from "@angular/material/sort";
import { MatPaginatorModule} from "@angular/material/paginator";
import { MatDialog, MatDialogModule} from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { TotalSalesComponent } from './dashboard/total-sales/total-sales.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { VisitsComponent } from './dashboard/visits/visits.component';
import { TotalClicksComponent } from './dashboard/total-clicks/total-clicks.component';
import { ConversionsComponent } from './dashboard/conversions/conversions.component';
import { SwitchingLineChardDiagramComponent } from './dashboard/switching-line-chard-diagram/switching-line-chard-diagram.component';
import { ActiveUsersDiagramComponent } from './dashboard/active-users-diagram/active-users-diagram.component';
import { SalesSummaryDiagramComponent } from './dashboard/sales-summary-diagram/sales-summary-diagram.component';
import { CircleDiagramComponent } from './dashboard/circle-diagram/circle-diagram.component';

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
    WriteMessageDialogComponent,
    FillerComponent,
    TotalSalesComponent,
    VisitsComponent,
    TotalClicksComponent,
    ConversionsComponent,
    SwitchingLineChardDiagramComponent,
    ActiveUsersDiagramComponent,
    SalesSummaryDiagramComponent,
    CircleDiagramComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatPseudoCheckboxModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatTabsModule,
    MatMenuModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatDialogModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    NgxChartsModule,
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
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
