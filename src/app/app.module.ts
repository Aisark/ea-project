import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

// Modulos
import { MaterialModule } from './modules/material/material.module'
import { RoutesModule } from './modules/routes/routes.module'

// Components
import { AppComponent } from './app-root/app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LibraryComponent } from './components/library/library.component';
import { ReaderComponent } from './components/reader/reader.component';

// Modulos Externos
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    LibraryComponent,
    ReaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
