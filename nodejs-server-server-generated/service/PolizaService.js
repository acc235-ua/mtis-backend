'use strict';


/**
 * Consultar pólizas de un cliente
 * Consulta todas las pólizas de un cliente
 *
 * cliente String 
 * returns Poliza
 **/
exports.polizaClienteGET = function(cliente) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "precio" : 0,
  "fecha_inicio" : "2000-01-23",
  "fecha_fin" : "2000-01-23",
  "direccion" : "direccion",
  "nombre" : "nombre",
  "deducible" : 6
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Consultar póliza de un cliente
 * Consulta una única póliza de un cliente
 *
 * cliente String 
 * id Integer 
 * returns Poliza
 **/
exports.polizaClienteIdGET = function(cliente,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "precio" : 0,
  "fecha_inicio" : "2000-01-23",
  "fecha_fin" : "2000-01-23",
  "direccion" : "direccion",
  "nombre" : "nombre",
  "deducible" : 6
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Enviar póliza al cliente
 * Envía la póliza al cliente
 *
 * cliente String 
 * returns Poliza
 **/
exports.polizaClientePOST = function(cliente) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "precio" : 0,
  "fecha_inicio" : "2000-01-23",
  "fecha_fin" : "2000-01-23",
  "direccion" : "direccion",
  "nombre" : "nombre",
  "deducible" : 6
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Crear poliza
 * Crear una nueva polzia
 *
 * body Poliza 
 * returns Poliza
 **/
exports.polizaPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "precio" : 0,
  "fecha_inicio" : "2000-01-23",
  "fecha_fin" : "2000-01-23",
  "direccion" : "direccion",
  "nombre" : "nombre",
  "deducible" : 6
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

