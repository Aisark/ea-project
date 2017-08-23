import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdToolbarModule, MdIconModule, MdSidenavModule,
         MdButtonModule, MdMenuModule } from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    MdToolbarModule,
    MdIconModule,
    MdSidenavModule,
    MdButtonModule,
    MdMenuModule
  ],
  exports: [
    MdToolbarModule,
    MdIconModule,
    MdSidenavModule,
    MdButtonModule,
    MdMenuModule
  ],
  declarations: []
})
export class MaterialModule { }
