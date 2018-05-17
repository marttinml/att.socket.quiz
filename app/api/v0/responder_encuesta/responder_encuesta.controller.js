var ResponderEncuestaModel 	= require('./responder_encuesta.model'),
    ResponderEncuestaCollection   = require('./responder_encuesta.collection'),
    EncuestaModel   = require('../encuesta/encuesta.model'),
    assert      = require('assert'),
    Connection  = require('../../../config/mongodb'),
    Log         = require('../../../shared/log'),
    merge       = require('merge'),
    controller  = 'test';


module.exports.indicadores = function (id, callback) {
    var d   = new Date();
        start   = d.getMilliseconds();
        Log.logStart({controller : controller, method:'ResponderEncuesta.detail', d : d});
    Connection.ejecute(function(err, client){
        assert.equal(null, err);
        //ejecute query

        EncuestaModel.detail(client.db(), id,function(encuesta, status){

          if(status === 200){
                ResponderEncuestaModel.indicadores(client.db(), encuesta, function(result) {
                  client.close();
                  Log.logEnd({ start : start , response: result});
                  callback(result);
              });
          }else{
            var result = {encuesta:id, mensaje:"No Existe", respondida:0};
            callback(result);
          }
      });
    });
};

