'use strict';


/**
 * Constracta incidencias
 * Constracta incidencias
 *
 * user_nif String 
 * type_incidence String 
 * no response value expected for this operation
 **/
exports.incidenceContractuser_nifType_incidenceGET = function(user_nif,type_incidence) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Devuelve las ultimas incidencias
 * Devuelve las ultimas incidencias
 *
 * user_nif String 
 * returns Lista_Inc
 **/
exports.incidenceRecentuser_nifPOST = function(user_nif) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "lista_Inc" : "lista_Inc"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Comprueba el tipo de dato
 * Comprueba el tipo de dato
 *
 * file_inf String 
 * no response value expected for this operation
 **/
exports.incidenceTypefile_infGET = function(file_inf) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

