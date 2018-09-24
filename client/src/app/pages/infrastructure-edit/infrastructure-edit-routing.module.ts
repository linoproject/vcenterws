import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfrastructureEditComponent } from './infrastructure-edit.component';

const routes: Routes = [
  {
    path: '',
    component: InfrastructureEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfrastructureEditRoutingModule { }
