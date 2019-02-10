let app = angular.module("myApp",[]);

app.controller("myCtr", function ($scope, $http) {

    let serverUrl = "http://localhost:3000";

    $scope.name="";
    $scope.pass="";

    $scope.checkUser = function () {
        let data = {
            "login": $scope.name,
            "password": $scope.pass
        };
        let options = {
            method: "GET",
            url: serverUrl+"/checkUser",
            params: data
        };
        let succFunc = function(data){
            console.log(data);
            alert(data.data);
        };
        let errFunc = function(data){
            error.log(data);
        };
         $http(options).then(succFunc, errFunc);
    }

});