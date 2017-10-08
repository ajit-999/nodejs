var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/fruits';
MongoClient.connect(url,function(err,db){
    if (err) {
    	console.log(err);
    }
    else{
    	console.log('Connected to',url);
        var collection = db.collection('apples');
        var doc1 = {
        	name : 'Red apples', color:'red'
        };
        var doc2 = {
        	name : 'Green apples', color:'green'
        };
        collection.remove({'name':'Red apples'},function(err,res){
            if (err) {
                console.log(err);
            }
            else{
                console.log('%s',res);
            }
            db.close();
        });
    }});


