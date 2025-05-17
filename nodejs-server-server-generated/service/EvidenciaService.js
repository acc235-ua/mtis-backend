'use strict';

const db = require('../utils/db');

/**
 * Upload evidence
 * POST /v1/evidence/upload
 */
exports.evidenceUploadPOST = function(body) {
  return new Promise(function(resolve, reject) {
    try {
      console.log('Request body received:', body);
      
      // Extract data from JSON body
      const claim_id = body.claim_id;
      const evidence = body.evidence;
      
      console.log('Processing evidence data:', { claim_id, evidence });
      
      // Validate required fields
      if (!claim_id) {
        return reject(new Error('No se proporcionó un ID de parte'));
      }
      
      if (!evidence) {
        return reject(new Error('No se proporcionó una evidencia'));
      }
      
      // Now implement the database operations
      const getIncidenciaQuery = `
        SELECT Incidencia_ID FROM Parte WHERE ID = ?
      `;
      
      db.query(getIncidenciaQuery, [claim_id], (incidenciaErr, incidenciaResults) => {
        if (incidenciaErr) {
          console.error('Error al obtener la incidencia:', incidenciaErr);
          return reject(incidenciaErr);
        }
        
        if (!incidenciaResults || incidenciaResults.length === 0) {
          console.log('No se encontró parte con ID:', claim_id);
          // For testing, continue anyway
          return resolve({
            success: true,
            message: 'Test mode: Evidencia recibida correctamente',
            data: { claim_id, evidence }
          });
        }
        
        const incidenciaId = incidenciaResults[0].Incidencia_ID;
        console.log('Asociando evidencia a incidencia:', incidenciaId);
        
        // Update evidence
        const updateQuery = `
          UPDATE Incidencia 
          SET Evidencias = CASE
            WHEN Evidencias IS NULL OR Evidencias = '' THEN ?
            ELSE CONCAT(Evidencias, ', ', ?)
          END
          WHERE ID = ?
        `;
        
        db.query(updateQuery, [evidence, evidence, incidenciaId], (updateErr) => {
          if (updateErr) {
            console.error('Error al actualizar evidencia:', updateErr);
            return reject(updateErr);
          }
          
          resolve({
            success: true,
            message: 'Evidencia registrada correctamente'
          });
        });
      });
    } catch (err) {
      console.error('Error processing evidence:', err);
      reject(err);
    }
  });
};