'use strict';


/**
 * Consulta la cantidad a percibir por el usuario
 *
 * cliente String 
 * id Integer 
 * returns Indemnizacion
 **/
exports.indemnizacionClienteIdGET = function(cliente,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "suma" : 0.8008281904610115,
  "ok" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

