import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router'

// Components
import { AppComponent } from '../../app-root/app.component'
import { LibraryComponent } from '../../components/library/library.component'
import { ReaderComponent } from '../../components/reader/reader.component'

const routes: Routes = [
  {path: '', component: LibraryComponent},
  {path: 'reader', component: ReaderComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutesModule { }
