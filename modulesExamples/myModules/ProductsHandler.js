module.exports = class ProductsHandler{
    constructor(coll){
        this.coll = coll;
    }

    showProducts(callback){
        this.coll.find({}).toArray(function (err, data) {
            callback(data);
        })
    }
};