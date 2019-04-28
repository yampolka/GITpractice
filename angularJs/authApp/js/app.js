var app = angular.module('app', ['ngTouch', 'ui.grid', 'ui.grid.pagination']);



var itemsDetails = [
    { itemCode : 100,
        itemName : 'ONE',
        itemDescription : 'Hey Hie',
        uom : 'FEET',
        available : 'YES',
        openStock : 7,
        restrictStock : 16,
        threshold : 0,
        active : 'YES'
    },
    { itemCode : 102,
        itemName : 'TWO',
        itemDescription : 'Hey Hie',
        uom : 'GALLONS',
        available : 'YES',
        openStock : 8,
        restrictStock : 15,
        threshold : 0,
        active : 'YES'
    },
    { itemCode : 103,
        itemName : 'THREE',
        itemDescription : 'Hey Hie',
        uom : 'GALLONS',
        available : 'YES',
        openStock : 0,
        restrictStock : 15,
        threshold : 0,
        active : 'YES'
    }
];
    controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.gridOptions1 = {
        paginationPageSizes: [25, 50, 75],
        paginationPageSize: 25,
        columnDefs: [
            { name: 'name' },
            { name: 'gender' },
            { name: 'company' }
        ]
    };


    $scope.gridOptions2 = {
        enablePaginationControls: false,
        paginationPageSize: 25,
        columnDefs: [
            { name: 'name' },
            { name: 'gender' },
            { name: 'company' }
        ]
    };

    $scope.gridOptions2.onRegisterApi = function (gridApi) {
        $scope.gridApi2 = gridApi;
    }

    $http.get('/data/100.json')
        .then(function (response) {
            $scope.gridOptions1.data = response.data;
            $scope.gridOptions2.data = response.data;
        });
}]);