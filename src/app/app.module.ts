import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

// Modulos
import { MaterialModule } from './modules/material/material.module'
import { RoutesModule } from './modules/routes/routes.module'
import { FirebaseModule } from './modules/firebase/firebase.module'

// Components
import { AppComponent } from './app-root/app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LibraryComponent } from './components/library/library.component';
import { ReaderComponent } from './components/reader/reader.component';
import { DetailComponent } from './components/detail/detail.component';
import { LogComponent } from './components/log/log.component';

// Services
import { BookService } from './services/book/book.service'
import { FirebaseService } from './services/firebase/firebase.service'
import { UsersService } from './services/users/users.service'
import { UploadService } from './services/upload/upload.service'

// Modulos Externos
import 'hammerjs'
import * as firebase from 'firebase/app'
import { environment } from '../environments/environment'
import { UnzipComponent } from './components/unzip/unzip.component'

firebase.initializeApp(environment.firebase)

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    LibraryComponent,
    ReaderComponent,
    DetailComponent,
    LogComponent,
    UnzipComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutesModule,
    FirebaseModule
  ],
  providers: [BookService, FirebaseService, UsersService, UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
