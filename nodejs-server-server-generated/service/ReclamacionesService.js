'use strict';


/**
 * Consulta si la poliza del cliente cubre la reclamación
 *
 * id_Reclamacion Integer 
 * cliente String 
 * id Integer 
 * returns Reclamacion
 **/
exports.reclamacionId_ReclamacionClienteIdGET = function(id_Reclamacion,cliente,id) {
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

