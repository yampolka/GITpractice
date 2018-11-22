var express = require('express');
var app = express();
var sql = require("mssql");
var bodyParser = require('body-parser');
// create application/x-www-form-urlencoded parser
var cors = require('cors');
var  app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
// create application/json parser
app.use(bodyParser.json());


var config = {
    user: 'motvit',
    password: 'leranedura',
    server: 'VALERIE-PC',
    database: 'Boe5'
};
var con3 = new sql.ConnectionPool( {

    user: 'motvit',
    password: 'leranedura',
    server: 'VALERIE-PC',
    database: 'Boe5'


});



// one for everything?


app.post('/insertUser',function (req, res) {
    con3.connect().then(function () {
        var transaction = new sql.Transaction(con3);
        transaction.begin().then(function () {
            var request = new sql.Request(transaction);
            console.log(req.body);
            console.log( req.body.UserName);
            // var parsed = JSON.parse(req.body);
            request.input("UserName", sql.VarChar(50), req.body.UserName);
            request.input("Pass", sql.VarChar(50), req.body.Pass);
            request.input("LoginID", sql.VarChar(50), req.body.LoginID);
            request.execute("Usp_InsertUser").then(function () {
                transaction.commit().then(function (recordSet) {
                    con3.close();
                    res.status(200).send(req.body);
                }).catch(function (err) {
                    con3.close();
                    res.status(400).send("Error while inserting data");
                });
            }).catch(function (err) {
                con3.close();
                res.status(400).send("Error while inserting data");
            });
        }).catch(function (err) {
            con3.close();
            res.status(400).send("Error while inserting data");
        });
    }).catch(function (err) {
        con3.close();
        res.status(400).send("Error while inserting data");
    });
});




app.post('/ValidUser',function (req, res) {
    //var con3 = new sql.connectionPool(config);
    //sql.connect(config).then(function()
  con3.connect().then(function()
    { //6
        var request = new sql.Request(con3);
        var query="EXECUTE [dbo].[getUser] -9999,-9999"
        console.log(1);
        if (""!==req.body.Pass.toString()&&
            ""!==req.body.LoginID.toString())
        {
            query = 'EXECUTE [dbo].[getUser] ' + req.body.Pass.toString() + ', ' +  req.body.LoginID.toString();
        }

        //7
        console.log(2);
        console.log(query);
        request.query(query).
        then
        (function ( recordset)
        {

            res.json(recordset.recordset);
            //console.log(recordset.recordset[0].UserName);

            console.log("I am  about to close ");
            console.log(recordset.recordsets.length);
            con3.close() ;
            //sql.close();
            console.log("I closed ");
        });
    }).catch (function(err)
    {
        //8
        //sql.close();
        con3.close() ;
        console.log(err);
        console.log("error");
    })
});












app.get('/ValidUser', function (req, res)
{
    let con3 = new sql.connectionPool(config);
    con3.connect().then(function()
    { //6
        var request = new sql.Request(con3);
        //7
        request.query('select * from Products').
        then
        (function ( recordset)
        {
            res.json(recordset.recordset);
            console.log("I am  about to close ");
            con3.close() ;
            console.log("I closed ");
        });
    }).catch (function(err)
    {
        //8
        console.log(err);
        console.log("error");
    })
});











//var server = app.listen(5000, function () {
//    console.log('Server is running..');
//});



var server = app.listen(5000, function () {
    console.log('Server is running..');
});

//https://github.com/tediousjs/node-mssql/issues/22
//https://www.npmjs.com/package/mssql#connection-pools

//https://www.dotnetcurry.com/nodejs/1238/connect-sql-server-nodejs-mssql-package // promise?
