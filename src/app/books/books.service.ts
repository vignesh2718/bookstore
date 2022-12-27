import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor() { }

  getBooks(){
   return  [
      {
        image: 'https://m.media-amazon.com/images/I/41GMFzpDzuL.jpg',
        name: 'Autobiography of a Yogi',
        author: 'Paramahansa Yogananda',
        amount: 117,
      },
      {
        image: 'https://m.media-amazon.com/images/I/51xwGSNX-EL.jpg',
        name: 'Ikigai: The Japanese secret to a long and happy life',
        author: 'Héctor García',
        amount: 225,
      },
      {
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeam_XfZ62IvONo2M6tcFF6MNQnTffHTG4EEvEuwNpDb-9PZrtadln01ny_I8UN1UuWF4&usqp=CAU',
        name: 'The Secret',
        author: 'Rhonda Byrne',
        amount: 578,
      },
      {
        image:
          'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg',
        name: 'Atomic Habits The Life-changing Million-copy',
        author: 'James Clear ',
        amount: 350,
      },

      {
        image: 'https://m.media-amazon.com/images/I/41NmiyLR0dL.jpg',
        name: 'The Freedom Manifesto',
        author: 'Karan Bajaj',
        amount: 450,
      },
      {
        image: 'https://m.media-amazon.com/images/I/41p3wLqPkKL.jpg',
        name: 'Doglapan: The Hard Truth about Life and Start-Ups',
        author: 'Ashneer Grover ',
        amount: 600,
      },
      {
        image:
          'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/41aJnFuCBWL._SX331_BO1,204,203,200_.jpg',
        name: 'Rich Dads Cashflow Quadrant',
        author: 'Robert T. Kiyosaki',
        amount: 399,
      },

      {
        image: 'https://m.media-amazon.com/images/I/51DLoxAJ68L.jpg',
        name: 'The Intelligent Investor',
        author: 'Benjamin Graham',
        amount: 469,
      },
      {
        image: 'https://m.media-amazon.com/images/I/410llGwMZGL.jpg',
        name: 'The Alchemist',
        author: 'Paulo Coelho',
        amount: 500,
      },
      {
        image:
          'https://m.media-amazon.com/images/P/B08FHZ5L47.01._SCLZZZZZZZ_SX500_.jpg',
        name: 'The Psychology of Money',
        author: 'Morgan Housel',
        amount: 178,
      },

      {
        image: 'https://m.media-amazon.com/images/I/51nXtm-i4AL.jpg',
        name: 'Think, Act, and Invest Like Warren Buffett: The Winning Strategy to Help You Achieve Your Financial and Life Goals',
        author: 'Larry Swdroe',
        amount: 2566,
      },
      {
        image: 'https://m.media-amazon.com/images/I/51A88IvtjGL.jpg',
        name: 'Rich Dad Poor Dad : What The Rich Teach Their Kids About Money That The Poor And Middle Class Do Not!',
        author: 'Robert T. Kiyosaki',
        amount: 215,
      },
      {
        image: 'https://m.media-amazon.com/images/I/41iUdP0aG3L.jpg',
        name: 'A Life in the Shadows',
        author: 'A.S. Dulat',
        amount: 500,
      },
      {
        image:
          'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/41+9HO2jzSL._SX321_BO1,204,203,200_.jpg',
        name: 'Build, Dont Talk: Things You Wish You Were Taught in School',
        author: 'Raj Shamani',
        amount: 180,
      },
      {
        image: 'https://m.media-amazon.com/images/I/41neJOXyNQL.jpg',
        name: 'THow to Think Like Benjamin Graham and Invest Like Warren Buffett',
        author: 'Lawrence Cunningham',
        amount: 1066.98,
      },
    ];
  }
}
