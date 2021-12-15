import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { Routes, RouterModule } from '@angular/router';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { WysiwygEditorComponent } from './wysiwyg-editor/wysiwyg-editor.component';
import { HttpClientModule} from '@angular/common/http';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';



@NgModule({
  declarations: [
    AppComponent,
    DragDropComponent,
    WysiwygEditorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    DragDropModule,
    HttpClientModule, 
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
