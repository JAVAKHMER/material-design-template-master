
var app = angular.module('myapp',[]);
app.config(['$interpolateProvider','$httpProvider',
	function( $interpolateProvider,$httpProvider) {
		$interpolateProvider.startSymbol('{$');
		$interpolateProvider.endSymbol('$}');
		$httpProvider.defaults.xsrfCookieName = 'csrftoken';
		$httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
	},
]);

app.controller('mycontroller', ['$scope', '$http', function($scope, $http) {
	$http({
		method : 'GET',
		url : 'http://192.168.2.98:9000/list/job/type/'
	}).then(function mySucces(response) {
		$scope.datas = response.data;
	}, function myError(response) {
		$scope.datas = response.statusText;
	});


}]);