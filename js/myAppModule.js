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

// Product 
// configure the module with a controller
angular.module('myAppModule').controller('myDemoCtrl', function ($scope) {
        $scope.colorsArray = ['red', 'green', 'blue', 'purple', 'olive']
	}
);

myAppModule.directive('colorList', function ($compile) {
return {
        restrict: 'AE',
        template: "<button ng-click='showHideColors()' type='button'>"
            + "{{isHidden ? 'Show Available Colors' : 'Hide Available Colors'}}"
            + "</button><div ng-hide='isHidden' id='colorContainer'>"
            + "</div>",
        link: function ($scope, $element) {
            // set default state of hide/show
            $scope.isHidden = true;
            // add function to manage hide/show state
            $scope.showHideColors = function () {
                $scope.isHidden = !$scope.isHidden;
            }
			
			// add colors divs to the document
			var colorContainer = $element.find('div'); 
			angular.forEach($scope.colorsArray, function (color) {
				var appendString = "<div style='background-color:" + color + "'>" + color +   "</div>";
                colorContainer.append(appendString);
            });
		} 
	};
});