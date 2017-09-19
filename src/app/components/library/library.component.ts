import { Component, OnInit } from '@angular/core'

// Class
import { Book } from '../../class/book'

// Service
import { BookService } from '../../services/book/book.service'

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.sass']
})
export class LibraryComponent implements OnInit {
  books: Book[]

  constructor(private bookService: BookService) { }

  getBook(): void {
    this.books = this.bookService.getBooks()
  }


  ngOnInit() {
    this.getBook()
  }

}
