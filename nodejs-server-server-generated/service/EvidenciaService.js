'use strict';


/**
 * Adjuntar una evidencia
 *
 * no response value expected for this operation
 **/
exports.evidenceUploadPOST = function(body) {
  return new Promise(function(resolve, reject) {
    try {
      // Extraer datos del body
      const { claim_id, evidence } = body;
      
      if (!evidence) {
        return reject(new Error('No se proporcionó una evidencia'));
      }
      
      // Primero obtenemos el ID de la incidencia asociada al parte
      const getIncidenciaQuery = `
        SELECT Incidencia_ID FROM Parte WHERE ID = ?
      `;
      
      db.query(getIncidenciaQuery, [claim_id], (incidenciaErr, incidenciaResults) => {
        if (incidenciaErr) {
          console.error('Error al obtener la incidencia:', incidenciaErr);
          return reject(incidenciaErr);
        }
        
        if (incidenciaResults.length === 0) {
          return reject(new Error('No se encontró una incidencia asociada a este parte'));
        }
        
        const incidenciaId = incidenciaResults[0].Incidencia_ID;
        
        // Actualizar el campo Evidencias en la tabla Incidencia
        // Si ya hay evidencias, añadimos la nueva separada por coma
        const updateQuery = `
          UPDATE Incidencia 
          SET Evidencias = CASE
            WHEN Evidencias IS NULL OR Evidencias = '' THEN ?
            ELSE CONCAT(Evidencias, ',', ?)
          END
          WHERE ID = ?
        `;
        
        db.query(updateQuery, [evidence, evidence, incidenciaId], (updateErr, updateResults) => {
          if (updateErr) {
            console.error('Error al actualizar la evidencia:', updateErr);
            return reject(updateErr);
          }
          
          resolve({
            success: true,
            message: 'Evidencia adjuntada correctamente'
          });
        });
      });
    } catch (err) {
      console.error('Error al procesar la evidencia:', err);
      reject(err);
    }
  });
}

