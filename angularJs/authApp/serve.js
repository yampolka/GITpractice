var express = require('express');
var app = express();
var cors = require('cors');
var  app = express();

app.use(cors());

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