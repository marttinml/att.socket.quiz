module.exports.initEncuesta = function(db) {
	db.createCollection( "encuesta",
	   { validator: { $or:
	      [
	         { titulo: { $type: "string" } }
	      ]
	   }
	} );
};