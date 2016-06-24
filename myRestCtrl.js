
var myPinkApp = angular.module("myPinkApp",[]);
myPinkApp.controller("myPinkCtrl", function($scope,$http)
{
    $http.get("myJSON.json")
        .then(function(response) {
        $scope.personJSON = response.data;
    });
});
myPinkApp.controller("myPinkCtrlXML", function($scope,$http)
{
    $http.get("myXML.xml").
            then(function(data) {
        $scope.personXML = data;
    });
});
