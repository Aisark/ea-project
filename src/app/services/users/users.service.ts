import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'
import { Observable } from 'rxjs/Observable'
import { AngularFireAuth } from 'angularfire2/auth'

import * as firebase from 'firebase/app'

@Injectable()
export class UsersService {
  private user: Observable<firebase.User> = this.fba.authState
  private db: AngularFireDatabase
  constructor(private fba: AngularFireAuth) { }

  logIn(): void {
    this.fba.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider)
    .then( res => this.checkUser(res))
  }

  checkUser(res: firebase.auth.UserCredential): void {
    const user = res.user
    const ref = firebase.database().ref('users')
    ref.child(user.uid).once('value')
    .then((snap) => {
      if (!snap.exists()) {
        ref.child(user.uid).set({
          nameUser: '',
          dateSI: ''
        })
      }
    })
  }

  logOut(): void {
    this.fba.auth.signOut()
  }

  getUser(): Observable<firebase.User> {
    return this.user
  }

}
