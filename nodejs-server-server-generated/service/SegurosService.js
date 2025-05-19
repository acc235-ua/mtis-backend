'use strict';
const db = require('../utils/db.js');


/**
 * Consultar seguros de un cliente
 * Consulta todos los seguros de un cliente
 *
 * cliente String 
 * returns Seguro
 **/

exports.seguroClienteGET = function(cliente) {
  return new Promise(function(resolve, reject) {
    const query = 'SELECT * FROM Seguro WHERE DNI_Usuario = ?';
    db.query(query, [cliente], (error, results) => {
      if (error) {
        console.error("Error al consultar seguros:", error);
        return reject({ error: 'Error en la base de datos' });
      }
      resolve(results);
    });
  });
};

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
exports.seguroPOST = function (body) {
  return new Promise(function (resolve, reject) {
    const { DNI_Usuario, Tipo_Seguro, Tipo, Fecha_inicio, Fecha_fin } = body;

    let Precio;
    try {
      Precio = calcularPrecio(Tipo_Seguro, Tipo, Fecha_inicio, Fecha_fin);
    } catch (err) {
      return reject({ error: err.message });
    }

    const query = `
      INSERT INTO Seguro (DNI_Usuario, Tipo_Seguro, Tipo, Fecha_inicio, Fecha_fin, Precio)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(query, [DNI_Usuario, Tipo_Seguro ,Tipo, Fecha_inicio, Fecha_fin, Precio], (error, result) => {
      if (error) {
        console.error('Error al insertar seguro:', error);
        return reject({ error: 'Error al insertar seguro' });
      }

      const insertedSeguro = {
        ID: result.insertId,
        DNI_Usuario,
        Tipo_Seguro,
        Tipo,
        Fecha_inicio,
        Fecha_fin,
        Precio
      };

      resolve(insertedSeguro);
    });
  });
};


function calcularPrecio(tipo_seguro, tipo, fechaInicio, fechaFin) {
  //Imprimir prueba
  //console.log("Entra a calcularPrecio");
  const startDate = new Date(fechaInicio);
  const endDate = new Date(fechaFin);
  const durationInDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));

  let precioBase;
  switch (tipo.toLowerCase()) {
    case 'auto':
      precioBase = 3;
      break;
    case 'hogar':
      precioBase = 1.5;
      break;
    default:
      console.log("Tipo: " + tipo);
      throw new Error('Tipo de seguro no válido1');
  }

  let bonus = 0;
  switch (tipo_seguro.toLowerCase()) {
    case 'basico':
      bonus = 0;
      break;
    case 'todo riesgo':
      bonus = 50;
      break;
    case 'terceros':
      bonus = 100;
      break;
    default:
      throw new Error('Tipo de seguro no válido2');
  }
  return (precioBase * durationInDays) + bonus;
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

