import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Book} from '../../types/Book';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

@Input() book : Book = {} as Book;
@Output() bookemitter = new EventEmitter<Book>();

constructor() {}



ngOnInit(): void {}
i=0;
addToCart(){
this.bookemitter.emit(this.book);
}

}
