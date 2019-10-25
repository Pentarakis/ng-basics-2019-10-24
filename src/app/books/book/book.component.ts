import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'ngb-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input()
  book: Book;

  @Output()
  addNewBook: EventEmitter<Book> = new EventEmitter<Book>();

  constructor() { }

  save() {
    if (this.book.id) {
      this.book = new Book();
    } else {
      this.addNewBook.emit(this.book);
    }
  }

  ngOnInit() {
  }

}
