import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiPage } from './ui-page/ui-page';

const routes: Routes = [
  { path: '', component: UiPage }  // ruta /ui
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiRoutingModule { }
