import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule, FirebaseApp } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth'

import { environment } from '../../../environments/environment'

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase, 'mangatron'),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  exports: [
    AngularFireModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  declarations: []
})
export class FirebaseModule { }
