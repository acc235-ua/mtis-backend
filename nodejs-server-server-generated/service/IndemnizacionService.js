'use strict';

const db = require('../utils/db');
/**
 * Consulta la cantidad a percibir por el usuario
 *
 * cliente String 
 * returns Indemnizacion
 **/
exports.indemnizacionClienteIdGET = function(cliente) {
  return new Promise((resolve, reject) => {  
  try
  {
    const queryIndem = `
    SELECT PRECIO FROM SEGURO WHERE DNI_USUARIO = ?
    `;
//console.log(cliente);
    var dinero;

    db.query(queryIndem, [cliente], (error, results) => {
        if (error) {
          console.error('Error al obtener la indemnizacion del usuario:', error);
          return reject(error);
        }
          //console.log(results.length);
        if (results.length == 0) {
          return reject({
            status: 404,
            message: 'El usuario no tiene seguro.'
          });
        }
          //console.log(results);
          dinero = results[0].PRECIO;
          //console.log(dinero);

        resolve({
            ok: true,
            suma: dinero,
            status: 200
        });
      });
  }
  catch (err) {
    console.error('Error en el procesamiento:', err);
    reject(err);
  }
});
}

