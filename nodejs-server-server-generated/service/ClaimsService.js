'use strict';

const db = require('../utils/db');

/**
 * Consultar el estado de un parte de seguro
 *
 * claim_id String 
 * returns inline_response_200_2
 **/
exports.claimsClaim_idStatusGET = function(claim_id) {
  return new Promise(function(resolve, reject) {
    try {
      // Preparar la consulta SQL
      const query = `
        SELECT ID, Estado
        FROM Parte
        WHERE ID = ?
      `;
      
      // Ejecutar la consulta
      db.query(query, [claim_id], (error, results) => {
        if (error) {
          console.error('Error al consultar estado del parte:', error);
          return reject(error);
        }
        
        // Si no se encuentra el parte
        if (results.length === 0) {
          return reject({
            status: 404,
            message: 'Parte no encontrado'
          });
        }
        
        // Devolver el ID y estado del parte
        resolve({
          claim_id: results[0].ID.toString(),
          status: results[0].Estado
        });
      });
    } catch (err) {
      console.error('Error en el procesamiento:', err);
      reject(err);
    }
  });
}