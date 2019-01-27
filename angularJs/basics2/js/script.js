
let app = angular.module("myApp",[]);

app.controller("myCtr", function ($scope) {

    $scope.people =[
        {
            name: "Alex",
            age: 31
        },
        {
            name: "George",
            age: 14
        },
        {
            name: "Alice",
            age: 24
        }
    ];

    $scope.name="";

    $scope.addMan=function () {
        let obj ={
            name: $scope.name,
            age: 0
        };
        $scope.people.push(obj);
        $scope.name="";
    }
});