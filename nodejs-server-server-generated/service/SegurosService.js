'use strict';


/**
 * Consultar seguros de un cliente
 * Consulta todos los seguros de un cliente
 *
 * cliente String 
 * returns Seguro
 **/
exports.seguroClienteGET = function(cliente) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "cliente" : "cliente",
  "tipo" : "tipo",
  "precio" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Consultar seguro de un cliente
 * Consulta un único seguro de un cliente
 *
 * cliente String 
 * id Integer 
 * returns Seguro
 **/
exports.seguroClienteIdGET = function(cliente,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "cliente" : "cliente",
  "tipo" : "tipo",
  "precio" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Actualizar un seguro de un cliente
 * Actualiza un seguro de un cliente
 *
 * body Seguro 
 * cliente String 
 * id Integer 
 * returns Seguro
 **/
exports.seguroClienteIdPUT = function(body,cliente,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "cliente" : "cliente",
  "tipo" : "tipo",
  "precio" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Crear un seguro
 * Crea un nuevo seguro a partir de datos
 *
 * body Seguro 
 * returns Seguro
 **/
exports.seguroPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "cliente" : "cliente",
  "tipo" : "tipo",
  "precio" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Calcular precio
 * Calcula el precio de un seguro segun sus datos
 *
 * body Seguro 
 * returns Seguro
 **/
exports.seguroPrecioPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "cliente" : "cliente",
  "tipo" : "tipo",
  "precio" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

