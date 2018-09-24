import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfrastructureListComponent } from './infrastructure-list.component';

const routes: Routes = [
  {
    path: '',
    component: InfrastructureListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfrastructureListRoutingModule { }
