import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfrastructureListComponent } from './infrastructure-list.component';
import { InfrastructureListRoutingModule } from './infrastructure-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    InfrastructureListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    InfrastructureListComponent
  ]
})
export class InfrastructureListModule { }
