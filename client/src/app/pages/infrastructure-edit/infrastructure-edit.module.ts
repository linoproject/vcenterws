import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfrastructureEditComponent } from './infrastructure-edit.component';
import { InfrastructureEditRoutingModule } from './infrastructure-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    InfrastructureEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    InfrastructureEditComponent
  ]
})
export class InfrastructureEditModule { }
