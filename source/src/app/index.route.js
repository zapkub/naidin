export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main',
      data:{
        book_shelf:[
          {book_id:0,book_title:'แฮรี่ พอตหม้อกับศิลาสุขสรรพ์',price:100},
          {book_id:1,book_title:'แฮรี่ พอตหม้อกับห้องแห่งความลับ',price:100},
          {book_id:2,book_title:'แฮรี่ พอตหม้อกับนักโทษแห่งอัซคาบัน',price:100},
          {book_id:3,book_title:'แฮรี่ พอตหม้อกับถ้วยอัคนี' ,price:100},
          {book_id:4,book_title:'แฮรี่ พอตหม้อพาคีนกฟีนิกซ์',price:100},
          {book_id:5,book_title:'แฮรี่ พอตหม้อกับเจ้าชายเลือดผสม',price:100},
          {book_id:6,book_title:'แฮรี่ พอตหม้อกับเครื่องเทศยมทูต',price:100}
        ]
      }
    });

  $urlRouterProvider.otherwise('/');
}
