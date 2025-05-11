'use strict';


/**
 * Consulta si los datos proporcionados inicialmente por el usuario son correctos
 *
 * cliente String 
 * seguro Integer 
 * poliza Integer 
 * returns Comprobacion
 **/
exports.comprobarGET = function(cliente,seguro,poliza) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ok" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

