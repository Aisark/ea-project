import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdToolbarModule, MdIconModule } from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    MdToolbarModule,
    MdIconModule
  ],
  exports: [
    MdToolbarModule,
    MdIconModule
  ],
  declarations: []
})
export class MaterialModule { }
