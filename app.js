const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

//connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'webstore';

//Create a new MongoClient
const client = new MongoClient(url)



// Use connect method to connect to the server
client.connect(function(err) {
    assert.equal(null, err);
    console.log("Conectado al servidor")
    const db = client.db(dbName);

    insertDocuments(db, function(result){
        client.close()
        console.log(result)
    })

})


const insertDocuments = function(db, callback){
    //Get the documents collectios
    const collection = db.collection('products');
    // Insert some documents 
    collection.insertMany([
        {

            "title" : "Product created by hans",
            "type" : "custom",
            "height" : 600,
            "width" : 398,
            "price" : 19.49,
            "rating" : 4
        
        },    
         {

            "title" : "Product created by hans segundo",
            "type" : "custom",
            "height" : 600,
            "width" : 398,
            "price" : 19.49,
            "rating" : 4
        
        }
    ],function(err, result) {
        assert.equal(err, null)
       callback(result)
    }
    
    )
}


