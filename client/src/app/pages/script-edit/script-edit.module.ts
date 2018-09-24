import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScriptEditComponent } from './script-edit.component';
import { ScriptEditRoutingModule } from './script-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ScriptEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ScriptEditComponent
  ]
})
export class ScriptEditModule { }
