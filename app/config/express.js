/*jslint node:true*/
var express         = require("express"),
    app             = express(),
    server = require('http').Server(app);
    io = require('socket.io')(server);

module.exports = function(){

    var VERSIONS = {'Pre-Production': '/v0/'};
    app.get('/', function(req, res) {
        res.json(VERSIONS);
    });
    
    
    for (i in VERSIONS) {
        require('../api' + VERSIONS[i] + 'responder_encuesta/responder_encuesta.router')(io);
    }

    return server;
};








