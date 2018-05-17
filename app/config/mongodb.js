var assert = require('assert');
	MongoClient = require('mongodb').MongoClient,
	// url         = 'mongodb://2school666:25ch001666@ds043324.mongolab.com:43324/2school',
	 url 		= 'mongodb://digidev404:d1g1D3v501@ds051595.mlab.com:51595/encuestas';
	//url         = 'mongodb://localhost/encuestas';

// Test connection
module.exports.testConnection = function(){
	console.log("	Connecting to mongodb ···");
    module.exports.ejecute(function(err, client) { 
        assert.equal(null, err);
        
        console.log("	Connection to mongodb ···················· OK \n");
		console.log("	Server Started ··························· OK \n");
	    console.log(" - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n\n");
        client.close();
    });
};

module.exports.ejecute = function (handler) {
	MongoClient.connect(url, { useNewUrlParser: true },handler);
};