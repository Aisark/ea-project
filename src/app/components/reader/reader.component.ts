import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'
// Class

// Service
import { FirebaseService } from '../../services/firebase/firebase.service'

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.sass']
})
export class ReaderComponent implements OnInit {
  items: FirebaseListObservable<any[]>
  constructor(
    private db: AngularFireDatabase,
    private fdb: FirebaseService
  ) { }

  getItems(): void {
    this.items = this.fdb.getBooks()
  }

  ngOnInit() {
    this.getItems()
  }

}
