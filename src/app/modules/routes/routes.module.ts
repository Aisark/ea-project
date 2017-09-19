import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router'

// Components
import { AppComponent } from '../../app-root/app.component'
import { LibraryComponent } from '../../components/library/library.component'
import { ReaderComponent } from '../../components/reader/reader.component'
import { DetailComponent } from '../../components/detail/detail.component'
import { UnzipComponent } from '../../components/unzip/unzip.component'

const routes: Routes = [
  {path: '', redirectTo: '/library', pathMatch: 'full'},
  {path: 'reader', component: ReaderComponent},
  { path: 'library', component: LibraryComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: 'load', component: UnzipComponent}
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
