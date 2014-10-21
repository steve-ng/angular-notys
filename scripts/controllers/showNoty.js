'use strict';

angular.module('staticApp').controller('ShowNotyCtrl', 
  ["$scope","noty", function ($scope, noty) {


  	$scope.showNotyExample = function() {

  		noty.showNoty({
		  text: "Deleted an email",
		  ttl: 1000000, //time to live in miliseconds
		  type: "success", //success, warning, default, gmail 
		  options: ['Undo', 'Dismiss'], 
		  optionsCallBack:  function callback(optionClicked, optionIndexClicked) {
		    //handling code for options clicked
		  }
		})
  	}

}]);
