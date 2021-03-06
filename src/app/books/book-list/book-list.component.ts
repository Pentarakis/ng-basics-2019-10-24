import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'ngb-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Book[] = [
    {id: 3, name: 'A Storm of Swords', isbn: '978-0553106633'},
    {id: 4, name: 'The Hedge Knight', isbn: '978-0976401100'},
    {id: 5, name: 'A Feast for Crows', isbn: '978-0553801507'}
  ];

  displayedColumns: string[] = ['id', 'name', 'isbn'];

  selectedBook: Book = new Book();

  constructor() { }

  ngOnInit() {
  }

  private createId() {
    return this.books[this.books.length - 1].id + 1;
  }

  save(book: Book) {
    book.id = this.createId();
    this.books.push(book);
  }

}
