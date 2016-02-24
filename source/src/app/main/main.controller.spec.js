describe('controllers', () => {
  let vm;

  beforeEach(angular.mock.module('karma'));

  beforeEach(inject((($rootScope, $controller) => {
    let scope = $rootScope.$new();

    vm = $controller('MainController', {
      $scope: scope
    });
  })));

  let buying_case = [
    [{
      book_id: 0,
      price: 100,
      order: 2
    }, {
      book_id: 1,
      price: 100,
      order: 1
    }],
    [
      {
        book_id: 1,
        price: 100,
        order: 3
      },{
        book_id: 3,
        price: 100,
        order: 3
      }
    ],
    [
      {
        book_id: 0,
        price: 100,
        order: 1
      },{
        book_id: 1,
        price: 100,
        order: 1
      },
      {
        book_id: 3,
        price: 100,
        order: 1
      }
    ],
    [
      {
        book_id: 1,
        price: 100,
        order: 10
      }
    ]
  ];

  let results = [{
    amount: 3,
    net: 300,
    discount_price: 20,
    price: 280
  },{
    amount: 6,
    net: 600,
    discount_price: 60,
    price: 540
  },{
    amount: 3,
    net: 300,
    discount_price: 60,
    price: 240
  },{
    amount: 10,
    net: 1000,
    discount_price: 0,
    price: 1000
  }]

  it('should get 20! baht discount', () => {
    expect(vm.getDiscount(buying_case[0])).toEqual(results[0]);
  });
  it('shoud get 60baht discount',()=>{
    expect(vm.getDiscount(buying_case[1])).toEqual(results[1]);
  })
  it('shoud get 60baht discount',()=>{
    expect(vm.getDiscount(buying_case[2])).toEqual(results[2]);
  })
  it('shoud get no discount',()=>{
    expect(vm.getDiscount(buying_case[3])).toEqual(results[3]);
  })
});
