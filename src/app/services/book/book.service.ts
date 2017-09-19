import { Injectable } from '@angular/core';

import { BOOKS } from './mock-books'

import { Book } from '../../class/book'

@Injectable()
export class BookService {

  getBooks(): Book[] {
    return BOOKS
  }

  getBook(id: number): Book {
    return BOOKS.find(book => book.id === id)
  }

  constructor() { }

}
