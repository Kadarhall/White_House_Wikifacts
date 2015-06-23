app.controller('MainController', ['$scope', 'places', function($scope, places) {
				$scope.mapCenter = {
  						lat: 38.8977,
  						lng: -77.0366,
  						zoom: 20
				};
				
				places.success(function(data) {
          	$scope.geodata = data;
						$scope.mapMarkers = geodataToMarkers($scope.geodata);
				});
}]);