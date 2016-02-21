//creating a new module
var myAppModule = angular.module('myAppModule',[]);

// configure the module with a filter
myAppModule.filter('stripDashes', function() {
	return function(txt) {
	// filter code would go here
	}; 
});

// configure the module with a controller
myAppModule.controller('MyFilterDemoCtrl', function ($scope) {
         // controller code would go here
      }
);

// configure the module with a filter 
myAppModule.filter('stripDashes', function () {
    // the function we are in returns
    // the function below
    return function(txt) {
        return textToFilter.split('-').join(' ');
    };
});

myAppModule.filter("toTitleCase", function () {
    return function (str) {
        return str.replace(/\w\S*/g, function(txt){ return txt.charAt(0).toUpperCase() + txt.
        substr(1).toLowerCase();});
    };
});

// Product 
// configure the module with a controller
angular.module('myAppModule').controller('myProductDetailCtrl', function ($scope) {
        // Hide colors by default
        $scope.isHidden = true;
		// a function, placed into the scope, which
		// can toggle the value of the isHidden variable
		$scope.showHideColors = function () {
		    $scope.isHidden = !$scope.isHidden;
		}
	}
);