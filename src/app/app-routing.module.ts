import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { WysiwygEditorComponent } from './wysiwyg-editor/wysiwyg-editor.component';

const routes: Routes = [
  {path: 'drag-drop', component: DragDropComponent},
  {path: 'wysiwyg-editor', component: WysiwygEditorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
