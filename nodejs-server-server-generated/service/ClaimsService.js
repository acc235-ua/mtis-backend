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
      // Preparar la consulta SQL - this already includes all the fields you want
      const query = `
        SELECT ID, Titulo, Descripcion, Fecha, Evidencias, Latitud, Longitud, Estado
        FROM Incidencia
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
        
        // Convert the date to a formatted string if needed
        const fechaFormatted = results[0].Fecha ? 
          new Date(results[0].Fecha).toISOString().split('T')[0] : 
          null;
        
        // Return all fields from the database query
        resolve({
          claim_id: results[0].ID.toString(),
          title: results[0].Titulo,
          description: results[0].Descripcion,
          date: fechaFormatted,
          evidence: results[0].Evidencias,
          location: {
            latitude: results[0].Latitud,
            longitude: results[0].Longitud
          },
          status: results[0].Estado
        });
      });
    } catch (err) {
      console.error('Error en el procesamiento:', err);
      reject(err);
    }
  });
}

/**
 * Actualizar el estado de un parte de seguro
 *
 * claim_id String 
 * status String 
 * returns inline_response_200_2
 **/
exports.claimsClaim_idStatusPUT = function(claim_id, status) {
  return new Promise(function(resolve, reject) {
    try {
      console.log('Updating incident status:', { claim_id, status });
      
      // Preparar la consulta SQL
      const query = `
        UPDATE Incidencia
        SET Estado = ?
        WHERE ID = ?
      `;
      
      // Ejecutar la consulta - make sure parameters are in the right order
      db.query(query, [status, claim_id], (error, results) => {
        if (error) {
          console.error('Error al actualizar estado del parte:', error);
          return reject(error);
        }
        
        // Si no se encuentra el parte
        if (results.affectedRows === 0) {
          return reject({
            status: 404,
            message: `Parte no encontrado con ID: ${claim_id}`
          });
        }
        
        // Devolver el ID y nuevo estado del parte
        resolve({
          claim_id: claim_id,
          status: status
        });
      });
    } catch (err) {
      console.error('Error en el procesamiento:', err);
      reject(err);
    }
  });
};