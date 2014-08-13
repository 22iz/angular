(function(){
  var app = angular.module('store', []);

  app.controller('storeController', function(){
    this.products = gems;
  });

  var gems = [
  {
    name: 'sweet',
    description: 'so sweet',
    images: ['1', '2', '3']
  },
  
  {
    name: 'bitter',
    description: 'so bitter',
    images: ['4', '5', '6']

  },

  {
    name: 'saur',
    description: 'so saur'
  }];
})();