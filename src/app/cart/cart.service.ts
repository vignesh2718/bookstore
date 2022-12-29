import { Injectable } from '@angular/core';
import  {Book} from '../types/Book';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  [x: string]: any;
  getItems() {
    throw new Error('Method not implemented.');
  }
cart:Array<Book> = [];
  constructor() { }

  add(book:Book){
    this.cart.push(book);
    // console.log(book);
  }
  get(){
    return this.cart;
  }
  remove(book:Book){ 
    this.cart = this.cart.filter((b) => b != book);
  }
}
