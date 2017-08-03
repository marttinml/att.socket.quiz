var MongoDB = require('./app/config/mongodb'),
    express  = require('./app/config/express'),
    server      = express();

var port = process.env.PORT || 3000;

MongoDB.testConnection();
server.listen(port);
