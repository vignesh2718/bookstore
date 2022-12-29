
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import {Book} from '../../types/Book';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

@Input() book : Book = {} as Book;
// @Output() bookemitter = new EventEmitter<Book>();
isInCart: boolean = false;

constructor(private cartService:CartService) {}



ngOnInit(): void {}

addToCart(){
  this.isInCart = true;
  this.cartService.add(this.book);
// this.bookemitter.emit(this.book);
}
removeFromCart() {
  this.isInCart = false;
  this.cartService.remove(this.book);
}


}
