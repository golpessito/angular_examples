(function(){
  'use strict';

  angular.module('ServiceApp',[])
  .controller('ListController',ListController);

  function ListController(){
    var list=this;
    list.name="HOLA";
  };

})();
