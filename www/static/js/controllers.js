var app = angular.module('myApp', ['isteven-multi-select']);
app.config(['$interpolateProvider', '$httpProvider', '$locationProvider',
    function ($interpolateProvider, $httpProvider, $locationProvider) {
        $interpolateProvider.startSymbol('{$');
        $interpolateProvider.endSymbol('$}');
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    },
]);
app.controller('myController', ['$scope', '$http', '$window', function ($scope, $http, $window) {
    $scope.allJobType = [
        {name: 'Full Time',id:'1'},
        {name: 'Freelance',id:'2'},
        {name: 'Part Time',id:'3'},
        {name: 'Internship',id:'4'},
        {name: 'Temp/Full Time',id:'5'},
        {name: 'Temp to Direct',id:'6'},
    ];
    $scope.typeSelected = [];

    // $http({
    //     method: 'GET',
    //     url: 'http://192.168.2.98:9000/list/job/type/'
    // }).then(function mySucces(response) {
    //     for (var i = 0; i < response.data.length; i++) {
    //         $scope.allJobType[i] = {name: response.data[i].title};
    //     }
    // }, function myError(response) {
    //     $scope.datas = response.statusText;
    // });

    $scope.submitForm = function () {
        // console.log("it work" + $scope.newArray.toString());
        // $window.location.href = 'http://192.168.2.98:9000/name='+$scope.newArray[0].name;
        $window.location.href = 'https://apptradedesk.zination.com/jobs/#/?type_id='+$scope.typeSelected[0].id;
    }

}]);
//panharith huot
//
// var app = angular.module('myapp',[]);
// app.config(['$interpolateProvider','$httpProvider',
// 	function( $interpolateProvider,$httpProvider) {
// 		$interpolateProvider.startSymbol('{$');
// 		$interpolateProvider.endSymbol('$}');
// 		$httpProvider.defaults.xsrfCookieName = 'csrftoken';
// 		$httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
// 	},
// ]);
//
// app.controller('mycontroller', ['$scope', '$http', function($scope, $http) {
// 	$http({
// 		method : 'GET',
// 		url : 'http://192.168.2.98:9000/list/job/type/'
// 	}).then(function mySucces(response) {
// 		$scope.datas = response.data;
// 	}, function myError(response) {
// 		$scope.datas = response.statusText;
// 	});
//
//
// }]);