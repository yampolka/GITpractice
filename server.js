let express = require('express');
let sql = require("mssql");
let bodyParser = require('body-parser');
// create application/x-www-form-urlencoded parser
let cors = require('cors');
let app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
// create application/json parser
app.use(bodyParser.json());

/*
var config =  {
    "server": "10.2.1.35",
    "database": "Test",
    "user": "rread",
    "password": "galaxy",
    //"port": 1433,
    "requestTimeout": 60000,
    "connectionTimeout": 60000,
    "pool": {
        "max": 10,
        "min": 0,
        "idleTimeoutMillis": 30000
    }

}
*/
let config = {
    user: 'motvit',
    password: 'leranedura',
    server: 'VALERIE-PC',
    database: 'Boe5'
};

// one for everything?
let con3 = new sql.ConnectionPool(config);

app.post('/ValidUser',function (req, res) {



    con3.connect().then(function()
    { //6
        let request = new sql.Request(con3);


        let query = 'EXECUTE [dbo].[getUser] ' + req.body.Pass.toString() + ',' +  req.body.LoginID.toString();
        //7
        request.query(query).
        then
        (function ( recordset)
        {

            res.json(recordset.recordset);
            //console.log(recordset.recordset[0].UserName);

            console.log("I am  about to close ");
            console.log(recordset.recordsets.length);
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



app.post('/products222',function (req, res) {
    conn.connect().then(function () {
        var transaction = new sql.Transaction(conn);
        transaction.begin().then(function () {
            var request = new sql.Request(transaction);
            console.log(req.body);

            // var parsed = JSON.parse(req.body);
            request.input("ProductName", sql.VarChar(50), req.body.ProductName)
            request.input("ProductPrice", sql.Decimal(18, 0), req.body.ProductPrice)
            request.execute("Usp_InsertProduct").then(function () {
                transaction.commit().then(function (recordSet) {
                    conn.close();
                    res.status(200).send(req.body);
                }).catch(function (err) {
                    conn.close();
                    res.status(400).send("Error while inserting data");
                });
            }).catch(function (err) {
                conn.close();
                res.status(400).send("Error while inserting data");
            });
        }).catch(function (err) {
            conn.close();
            res.status(400).send("Error while inserting data");
        });
    }).catch(function (err) {
        conn.close();
        res.status(400).send("Error while inserting data");
    });
});


app.post('/products22',function (req, res)
{
    console.log("kkkk");
    res.send("hi this is test api");
});


app.get('/products2', function (req, res) {
    conn.connect()
        .then(function ()
        {
            var sqlQuery = "SELECT * FROM Products";
            var req = new sql.Request(conn);
            req.query(sqlQuery)
                .then
                (
                    function (recordset)
                    {
                        res.json(recordset.recordset);
                        conn.close();
                    }
                ).catch
            (function (err)
            {
                conn.close();
                res.status(400).send.send("Error while reading  data");
            });
        }).catch(function (err)
    {
        conn.close();
        res.status(400).send("Error while reading  data");
    });
});



app.get('/products', function (req, res) {

    var sql = require("mssql");
    sql.connect(
        config,
        function (err)
        {
            if (err) console.log(err);
            var request = new sql.Request();
            request.query('select * from Products', function (err, recordset)
            {
                if (err) console.log(err)
                res.json(recordset.recordset);
                console.log("I am  about to close ");
                sql.close() ;
                console.log("I closed ");
            });
        });

});



app.get('/ValidUser', function (req, res)
{
    let con3 = new sql.ConnectionPool(config);
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

app.get('/products3', function (req, res)
{
    let con3 = new sql.ConnectionPool(config);
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


app.put('products3/:id',   function (req, res) {
    var _productID = req.params.id;
    conn.connect().then(function () {
        var transaction = new sql.Transaction(conn);
        transaction.begin().then(function () {
            var request = new sql.Request(transaction);
            request.input("ProductID", sql.Int, _productID)
            request.input("ProductPrice", sql.Decimal(18, 0), req.body.ProductPrice)
            request.execute("Usp_UpdateProduct").then(function () {
                transaction.commit().then(function (recordSet) {
                    conn.close();
                    res.status(200).send(req.body);
                }).catch(function (err) {
                    conn.close();
                    res.status(400).send("Error while updating data");
                });
            }).catch(function (err) {
                conn.close();
                res.status(400).send("Error while updating data");
            });
        }).catch(function (err) {
            conn.close();
            res.status(400).send("Error while updating data");
        });
    }).catch(function (err) {
        conn.close();
        res.status(400).send("Error while updating data");
    });
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
