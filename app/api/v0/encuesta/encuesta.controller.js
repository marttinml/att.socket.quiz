var EncuestaModel = require('./encuesta.model'),
    EncuestaCollection = require('./encuesta.collection'),
    assert = require('assert'),
    Connection = require('../../../config/mongodb'),
    Log = require('../../../shared/log'),
    merge = require('merge'),
    controller = 'test';

(function () {
    // Connection.ejecute(function(err, db){
    //     assert.equal(null, err);
    //      EncuestaCollection.initEncuesta(db);
    //      db.close();
    //   });
})();


module.exports.retrieve = function (callback) {
    var d = new Date();
    start = d.getMilliseconds();
    Log.logStart({ controller: controller, method: 'Encuesta.retrieve', d: d });
    Connection.ejecute(function (err, client) {
        assert.equal(null, err);
        //ejecute query
        EncuestaModel.retrieve(client.db(), function (result) {
            client.close();
            Log.logEnd({ start: start, response: result });
            callback(result);
        });
    });
};

