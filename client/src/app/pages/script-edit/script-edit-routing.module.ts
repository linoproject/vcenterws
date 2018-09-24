import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScriptEditComponent } from './script-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ScriptEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScriptEditRoutingModule { }
