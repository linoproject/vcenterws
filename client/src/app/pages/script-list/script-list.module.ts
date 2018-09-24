import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScriptListComponent } from './script-list.component';
import { ScriptListRoutingModule } from './script-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ScriptListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ScriptListComponent
  ]
})
export class ScriptListModule { }
