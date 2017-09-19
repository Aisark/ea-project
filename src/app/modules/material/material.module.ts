import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdToolbarModule, MdIconModule, MdSidenavModule, MdInputModule,
         MdButtonModule, MdMenuModule, MdCardModule, MdGridListModule } from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    MdToolbarModule,
    MdIconModule,
    MdSidenavModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdGridListModule,
    MdInputModule
  ],
  exports: [
    MdToolbarModule,
    MdIconModule,
    MdSidenavModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdGridListModule,
    MdInputModule
  ],
  declarations: []
})
export class MaterialModule { }
