//11/18 2018 монго дб
 var express = require('express');
var app = express();
var mongo = require("mongodb").MongoClient;

var bodyParser = require('body-parser');
// create application/x-www-form-urlencoded parser
var cors = require('cors');
var  app = express();

// ноде сервер на порту 3000
var server = app.listen(3000, function () {
    console.log('Server is running..');
});
/*
* база данных по пице
*
*
*
*
*
* */
// пререквизиты  1) запустить сервер монгодб , запустить монго
// проинсталировать в папке приложения монго клиент
// действия :из  phpstorm запустить терминал
// комманда  NPM INSTALL MONGODB
// ЭТО ДАСТ ВОЗМОЖНОСТЬ ПОТОМ В КОДЕ СОЕДИНЯТЬСЯ С МОНГОДБ
// ПО ПРОТОКОЛУ МОНГОДБ
// постоянное соединение по протоколу монгодб на локальном компьютере
// на порту 27017
// вложенныж синаксис - означает ассинчронное выполнение
//  что нового  монгодб  может иметь статическое одно соединение
// и его хватает на всех клиентов ( клиентов мало)
mongo.connect("mongodb://localhost:27017",function (err, client)
{
    if (err)
    {
        console.log("cant connect to server");
        return;
    }
    let db = client.db("firstDb");
    let rooms = db.collection("rooms");// test
    rooms.find({}).toArray(function (err,result) {

        //? na хрена в метод то аррай посылать функциыю?
        // это на мой взгляд никак не связано с асинхронностью
        //  можно написать раздельно (проверить sintaksis find i sprosit;
        console.log(result);
    });



    app.get("/showRooms" ,function (request,response)
        {
             rooms.find({}).toArray( function (err ,result )
            {
                response.send(result);

            });

        });

    app.get("/showByFloor" ,function (request,response)
        {
        let parfloor =request.query.floor;
         rooms.find({"floor" : parfloor}).toArray( function (err ,result )
         {
                    if(err){
                        console.log("I made mistake with request to db");
                        return;
                    }
                    response.send(result);
                    response.send(result);
                }
          )});



    app.get("/showByPrice" ,function (request,response)
        {
            let minPrice =request.query.minPrice;
            let maxPrice =request.query.maxPrice;
            rooms.find({"prise" : { '$gte': minPrice, '$lte': maxPrice }}).toArray( function (err ,result )
                {

                    if(err){
                        console.log("I made mistake with request to db");
                        return;
                    }
                    response.send(result);
                    response.send(result);
                }
            )});

   // addRoom?name=visit&price=23&floor=2 (params might be different)
   // – creates new room with as
   //     following object: { name: “visit”, price: 23, free: true, floor: 2}





    app.get('/addRoom', function (req, res)
    {

             let name = req.query.name;
             let price = req.query.price;
             let floor = req.query.price;
             let newObj = {
                  "name": name,
                  "price" :price,
                   "floor" : floor
                 };
                rooms.insertOne(newObj);
                res.send("item added!");
            });



app.get('/updateItem', function (req, res)
{
            let id = req.query.id;
           let mongoId = new mongodb.ObjectID(id);
           let  jsonObject = req.query.jsonObject;

           rooms.update({_id: mongoId}, jsonObject);
           res.send("item updated!");
    });

});












