let app = angular.module("myApp",[]);

app.controller("myCtr", function ($scope, $http) {

    let serverUrl = "http://localhost:3000";

    $scope.name="";
    $scope.pass="";
    $scope.login="";


    $scope.nameReg = "";
    $scope.passReg = "";

    $scope.auth = true;

    $scope.toRegistration=function(){
        $scope.auth = false;
    };

    $scope.toAuth=function(){
        $scope.auth = true;
    };


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

    //adduser(login, pass ,name)

    $scope.adduser = function () {
        let data = {
            "login": $scope.login,
            "password": $scope.passReg,
            "name": $scope.nameReg

        };
        let options = {
            method: "GET",
            url: serverUrl+"/addUser",
            params: data
        };
        let succFunc = function(data){
            console.log(data);
            alert(data.data);
           //???? this.checkUser();
        };
        let errFunc = function(data){
            error.log(data);
        };
        $http(options).then(succFunc, errFunc);
    }


});