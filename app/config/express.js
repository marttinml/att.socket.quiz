/*jslint node:true*/
var express         = require("express"),
    app             = express(),
    server = require('http').Server(app);
    io = require('socket.io')(server);

module.exports = function(){

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', 'https://secure-mesa-50981.herokuapp.com/');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
    });

    var VERSIONS = {'Pre-Production': '/v0/'};
    app.get('/', function(req, res) {
        res.json(VERSIONS);
    });
    
    
    for (i in VERSIONS) {
        require('../api' + VERSIONS[i] + 'responder_encuesta/responder_encuesta.router')(io);
    }

    return server;
};








