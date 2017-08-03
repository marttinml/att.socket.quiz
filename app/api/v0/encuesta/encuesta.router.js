module.exports = function (app) {
    var Encuesta = require('./encuesta.controller');
    
    app.route('/v0/encuesta').post(Encuesta.create);
    app.route('/v0/encuesta').get(Encuesta.retrieve);
    app.route('/v0/encuesta/:id').get(Encuesta.detail);
    app.route('/v0/encuesta/:id').patch(Encuesta.update);
    app.route('/v0/encuesta/:id').put(Encuesta.replace);
    app.route('/v0/encuesta/:id').delete(Encuesta.delete);
};