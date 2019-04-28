var app = angular.module('myApp', ['ui.bootstrap']);


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
    },
    { itemCode : 104,
        itemName : 'FOUR',
        itemDescription : 'Hey Hie',
        uom : 'FEET',
        available : 'YES',
        openStock : 0,
        restrictStock : 15,
        threshold : 0,
        active : 'YES'
    },
    { itemCode : 105,
        itemName : 'FIVE',
        itemDescription : 'Hey Hie',
        uom : 'FEET',
        available : 'YES',
        openStock : 0,
        restrictStock : 14,
        threshold : 0,
        active : 'YES'
    },
    { itemCode : 106,
        itemName : 'SIX',
        itemDescription : 'Hey Hie',
        uom : 'FEET',
        available : 'YES',
        openStock : 0,
        restrictStock : 5,
        threshold : 0,
        active : 'YES'
    },
    { itemCode : 107,
        itemName : 'SEVEN',
        itemDescription : 'Hey Hie',
        uom : 'GALLONS',
        available : 'YES',
        openStock : 0,
        restrictStock : 5,
        threshold : 0,
        active : 'YES'
    },
    { itemCode : 108,
        itemName : 'EIGHT',
        itemDescription : 'Hey Hie',
        uom : 'FEET',
        available : 'YES',
        openStock : 5,
        restrictStock : 0,
        threshold : 0,
        active : 'YES'
    },
    { itemCode : 109,
        itemName : 'NINE',
        itemDescription : 'Hey Hie',
        uom : 'GALLONS',
        available : 'YES',
        openStock : 5,
        restrictStock : 0,
        threshold : 0,
        active : 'YES'
    },
    { itemCode : 110,
        itemName : 'TEN',
        itemDescription : 'Hey Hie',
        uom : 'FEET',
        available : 'YES',
        openStock : 77,
        restrictStock : 0,
        threshold : 0,
        active : 'YES'
    }
];



let users = [
    {
        "name": "Valeria",
        "login":"Val",
        "password":"123"
    }
];

var server = app.listen(3000, function () {
    console.log('Server is running..');
});


function addUser(login, pass ,name)
{
    let newuser =
        {
            "name": name,
            "login":login,
            "password":pass
        }
    users.push(newuser);
    return true;
}



app.get("/addUser",function (req,res) {
    let login = req.query.login;
    let pass = req.query.password;
    let name = req.query.name;
    let ans = addUser(login, pass,name);
    if (ans){
        res.send("user ,added ,granted");
    }
    else{
        res.send("access denied");
    }
});

function checkUser(login, pass) {
    for (let i=0;i<users.length;i++){
        if (login === users[i].login && pass === users[i].password){
            return true;
        }
    }
    return false;
}


app.get("/checkUser",function (req,res) {
    let login = req.query.login;
    let pass = req.query.password;
    let ans = checkUser(login, pass);
    if (ans){
        res.send("access granted");
    }
    else{
        res.send("access denied");
    }
});
app.controller('ListController', function($scope){

    $scope.curPage = 1,
        $scope.itemsPerPage = 3,
        $scope.maxSize = 5;

    this.items = itemsDetails;


    $scope.numOfPages = function () {
        return Math.ceil(itemsDetails.length / $scope.itemsPerPage);

    };

    $scope.$watch('curPage + numPerPage', function() {
        var begin = (($scope.curPage - 1) * $scope.itemsPerPage),
            end = begin + $scope.itemsPerPage;

        $scope.filteredItems = itemsDetails.slice(begin, end);
    });
});

