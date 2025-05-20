'use strict';

const db = require('../utils/db');

/**
 * Consulta si los datos proporcionados inicialmente por el usuario son correctos
 *
 * cliente String 
 * seguro Integer 
 * returns Comprobacion
 **/
exports.comprobarGET = function(cliente,seguro) {
  return new Promise(function(resolve, reject) {
    try
    {
      const queryCli = `
      SELECT * FROM USUARIO WHERE DNI = ?
      `;

      const querySeg = `
      SELECT ID FROM SEGURO WHERE ID = ? AND DNI_USUARIO = ?
      `;

      //console.log(cliente);
      //console.log(seguro);
      
      db.query(queryCli, [cliente], (error, results) => {
        if (error) {
          console.error('Error al comprobar los datos de la reclamacion:', error);
          return reject(error);
        }
        
        if (results.length === 0) {
          return reject({
            status: 404,
            message: 'Usuario no encontrado'
          });
        }
      });

      db.query(querySeg, [seguro, cliente], (error, results) => {
         if (error) {
          console.error('Error al comprobar los datos de la reclamacion:', error);
          return reject(error);
        }
        //console.log(results.length);
        

        if (results.length == 0) {
          return reject({
            status: 400,
            message: 'El Seguro no está registrado'
          });
        }else{
          //console.log(results[0].ID);
          return resolve({
          ok: true,
          status: 200
          });
        }
       
      });
      
      
    }
    catch(err)
    {
      console.error('Error:', err);
      reject(err);
    }
  });
}

