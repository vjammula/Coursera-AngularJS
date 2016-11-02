(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
 .controller('ToBuyController', ToBuyController)
 .controller("AlreadyBoughtController", AlreadyBoughtController)
 .service('ShoppingListCheckOffService', ShoppingListCheckOffService)


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){

	var showList = this;

  	showList.toBuyList = ShoppingListCheckOffService.getItems();

	showList.addToBoughtList = function(itemIndex){
		ShoppingListCheckOffService.moveItem(itemIndex);
		ShoppingListCheckOffService.handleMessage();
		showList.toBuyMessage = ShoppingListCheckOffService.displayToBuyMessage(); 

	};

	showList.toBuyMessage = ShoppingListCheckOffService.displayToBuyMessage(); 
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){

	var displayList = this;

	displayList.boughtList = ShoppingListCheckOffService.displayItems();
	displayList.boughtMessage = ShoppingListCheckOffService.displayBoughtMessage();
	
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyList = [
	  {
	    name: "Milk",
	    quantity: "2"
	  },
	  {
	    name: "Donuts",
	    quantity: "200"
	  },
	  {
	    name: "Cookies",
	    quantity: "300"
	  },
	  {
	    name: "Chocolate",
	    quantity: "5"
	  }
  ];

  // List of bought items

  var boughtList = [];

  //Messaging
  var toBuyMessage = "";
  var boughtMessage = "Nothing bought yet .....";


  service.getItems = function(){
    return toBuyList;
  };


  service.handleMessage = function(){

  	if(boughtList.length > 0)
  	 	boughtMessage = ""; 

  	if(toBuyList.length == 0)
  		toBuyMessage = "Everything is exhausted";

  };

  service.displayBoughtMessage = function () {

  	return boughtMessage;
  }

	service.displayToBuyMessage = function () {

  		return toBuyMessage;
  }

  service.displayItems = function(){
  	
    return boughtList;
  };  

  service.moveItem = function (itemIndex) {
  	var item = toBuyList[itemIndex];

  	//Add item to boughtList
  	boughtList.push(item);
    
    //Removes Item from toBuyList
    toBuyList.splice(itemIndex, 1);
 
};

}

})();
