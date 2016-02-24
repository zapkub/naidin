/*eslint-env es6*/
export class MainController {
  constructor($log, $scope, _) {
    'ngInject';
    this._ = _;
    this.log = $log.log; //love lamba
    //this.books = $state.current.data.book_shelf;

    this.books = [{
      book_id: 0,
      book_title: 'แฮรี่ พอตหม้อกับศิลาสุขสรรพ์',
      price: 100
    }, {
      book_id: 1,
      book_title: 'แฮรี่ พอตหม้อกับห้องแห่งความลับ',
      price: 100
    }, {
      book_id: 2,
      book_title: 'แฮรี่ พอตหม้อกับนักโทษแห่งอัซคาบัน',
      price: 100
    }, {
      book_id: 3,
      book_title: 'แฮรี่ พอตหม้อกับถ้วยอัคนี',
      price: 100
    }, {
      book_id: 4,
      book_title: 'แฮรี่ พอตหม้อพาคีนกฟีนิกซ์',
      price: 100
    }, {
      book_id: 5,
      book_title: 'แฮรี่ พอตหม้อกับเจ้าชายเลือดผสม',
      price: 100
    }, {
      book_id: 6,
      book_title: 'แฮรี่ พอตหม้อกับเครื่องเทศยมทูต',
      price: 100
    }];

    angular.forEach(this.books, (item) => {
      item.order = 0;
    });

    $scope.$watch(() => {
      return this.books
    }, () => {
      let order = [];
      angular.forEach(this.books, (item) => {
        if (item.order > 0) {
          order.push({...item
          });
        }
      })
      this.result = this.getDiscount(order);
    }, true);

  }
  getDiscount(book_list) {

    const list_copy = book_list;
    let discountList = this.getListOfDiscount(list_copy);
    let result = {
      net: 0,
      amount: 0,
      discount_price: 0,
      price: 0
    }

    this._.each(discountList, item => {
      result.net += item.net;
      result.amount += item.amount;
      result.discount_price += item.discount_price;
      result.price += item.price;
    })
    return result;
  }

  //Reculsive does magic
  getListOfDiscount(list, result = []) {
    let orderAmount = this._.reduce(list, (memo, item) => {
      return memo + item.order
    }, 0);
    if(!orderAmount){
      return result;
    }
    let books = {
      net: 0,
      amount: 0,
      price: 0,
      discount_price: 0,
      discount: 0
    };
    //this loop find a set of different book
    this._.each(list, (item) => {
      if (item.order > 0) {
        books.net += item.price;
        books.amount++;
        item.order--;
      }
    })
    books.discount = (books.amount - 1) * 10;
    if (books.amount > 1) {
      books.discount_price = (books.net * books.discount / 100);
      books.price = books.net - books.discount_price;
    } else {
      books.price = books.net;
    }
    result.push(books);
    return  this.getListOfDiscount(list, result)
  }
}
