import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

// Class
import { Book } from '../../class/book'

// Service
import { BookService } from '../../services/book/book.service'

import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {
  book: Book

  constructor(
    private bookservice: BookService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  goBack(): void {
    this.location.back()
  }

  ngOnInit() {
    this.route.paramMap
      .switchMap((param: ParamMap) => param.get('id'))
      .subscribe((id: string) => this.book = this.bookservice.getBook(+id))
  }

}
