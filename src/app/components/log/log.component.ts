import { Component, OnInit } from '@angular/core'
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'
import { Observable } from 'rxjs/Observable'
import { AngularFireAuth } from 'angularfire2/auth'
import * as firebase from 'firebase/app'

// Services
import { UsersService } from '../../services/users/users.service'

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.sass']
})
export class LogComponent implements OnInit {
  user: Observable<firebase.User>

  constructor(
    private userServices: UsersService
  ) { }

  ngOnInit() {
    this.getUser()
  }

  getUser(): void {
    this.user = this.userServices.getUser()
  }

  logIn(): void {
    this.userServices.logIn()
  }

  logOut(): void {
    this.userServices.logOut()
  }

}
