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
      const incident_id = body.claim_id;  // Keeping parameter name compatible with frontend
      const evidence = body.evidence;
      
      console.log('Processing evidence data:', { incident_id, evidence });
      
      // Validate required fields
      if (!incident_id) {
        return reject(new Error('No se proporcionó un ID de incidencia'));
      }
      
      if (!evidence) {
        return reject(new Error('No se proporcionó una evidencia'));
      }

      // Update evidence directly in Incidencia table
      const updateQuery = `
        UPDATE Incidencia 
        SET Evidencias = CASE
          WHEN Evidencias IS NULL OR Evidencias = '' THEN ?
          ELSE CONCAT(Evidencias, ', ', ?)
        END
        WHERE ID = ?
      `;
      
      db.query(updateQuery, [evidence, evidence, incident_id], (updateErr, updateResult) => {
        if (updateErr) {
          console.error('Error al actualizar evidencia:', updateErr);
          return reject(updateErr);
        }
        
        // Check if any rows were actually updated
        if (updateResult.affectedRows === 0) {
          console.log('No se encontró incidencia con ID:', incident_id);
          return reject(new Error('No se encontró una incidencia con el ID proporcionado'));
        }
        
        resolve({
          success: true,
          message: 'Evidencia registrada correctamente',
          incident_id: incident_id
        });
      });
    } catch (err) {
      console.error('Error processing evidence:', err);
      reject(err);
    }
  });
};