'use strict';

const db = require('../utils/db');

/**
 * Registrar un nuevo incidente
 *
 * body Incidents_body 
 * returns inline_response_201
 **/
exports.incidentsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    try {
      // Extraer datos del body
      const { incident_type, location, description, reported_by } = body;
      
      // Preparar la consulta SQL
      const query = `
        INSERT INTO Incidencia 
        (Titulo, Descripcion, DNI_Usuario, Fecha, Latitud, Longitud) 
        VALUES (?, ?, ?, CURDATE(), ?, ?)
      `;
      
      const params = [
        incident_type,                // Titulo
        description,                  // Descripcion
        reported_by.contact,          // DNI_Usuario
        location.latitude,            // Latitud
        location.longitude            // Longitud
      ];
      
      // Ejecutar la consulta usando la conexión existente
      db.query(query, params, (error, results) => {
        if (error) {
          console.error('Error al registrar incidente:', error);
          reject(error);
        } else {
          // Devolver el ID del incidente creado
          resolve({
            incident_id: results.insertId.toString()
          });
        }
      });
    } catch (err) {
      console.error('Error en el procesamiento:', err);
      reject(err);
    }
  });
}


/**
 * Crear parte de seguro asociado a un incidente
 *
 * body Insurance_claim_body 
 * returns inline_response_201_1
 **/
exports.insuranceClaimPOST = function(body) {
  return new Promise(function(resolve, reject) {
    try {
      // Extraer datos del body
      const { incident_id, insured_name, policy_number, damage_description } = body;
      
      // Primero necesitamos obtener el Poliza_ID basado en el policy_number
      const findPolicyQuery = `
        SELECT ID FROM Seguro WHERE NumeroPoliza = ?
      `;
      
      db.query(findPolicyQuery, [policy_number], (policyError, policyResults) => {
        if (policyError) {
          console.error('Error al buscar la póliza:', policyError);
          return reject(policyError);
        }
        
        if (policyResults.length === 0) {
          return reject(new Error('No se encontró la póliza con el número proporcionado'));
        }
        
        const polizaId = policyResults[0].ID;
        
        // Insertar en la tabla Parte
        const insertQuery = `
          INSERT INTO Parte 
          (Incidencia_ID, Poliza_ID, Descripcion)
          VALUES (?, ?, ?)
        `;
        
        const params = [
          parseInt(incident_id, 10),   // Convertir a entero
          polizaId,                    // ID de la póliza encontrada
          damage_description           // Descripción del daño
        ];
        
        db.query(insertQuery, params, (insertError, insertResults) => {
          if (insertError) {
            console.error('Error al registrar parte de seguro:', insertError);
            return reject(insertError);
          }
          
          // Devolver el ID del parte creado
          resolve({
            claim_id: insertResults.insertId.toString()
          });
        });
      });
    } catch (err) {
      console.error('Error en el procesamiento del parte de seguro:', err);
      reject(err);
    }
  });
}


/**
 * Validar si una póliza está en el sistema
 *
 * body Policy_validate_body 
 * returns inline_response_200_1
 **/
exports.insurancePolicyValidatePOST = function(body) {
  return new Promise(function(resolve, reject) {
    try {
      // Extraer el número de póliza del body
      const { policy_number } = body;
      
      // Consulta SQL para obtener la información de la póliza y el usuario
      const query = `
        SELECT 
          s.ID, 
          s.Tipo, 
          s.Fecha_inicio, 
          s.Fecha_fin, 
          CONCAT(u.Nombre, ' ', u.Apellidos) AS nombre_completo
        FROM 
          Seguro s
        JOIN 
          Usuario u ON s.DNI_Usuario = u.DNI
        WHERE 
          s.ID = ?
      `;
      
      db.query(query, [policy_number], (error, results) => {
        if (error) {
          console.error('Error al validar póliza:', error);
          return reject(error);
        }
        
        // Si no existe la póliza
        if (results.length === 0) {
          return resolve({
            valid: false,
            policy_details: null
          });
        }
        
        const poliza = results[0];
        const fechaActual = new Date();
        const fechaInicio = new Date(poliza.Fecha_inicio);
        const fechaFin = new Date(poliza.Fecha_fin);
        
        // Verificar si la póliza está vigente
        const isValid = fechaActual >= fechaInicio && fechaActual <= fechaFin;
        
        // Construir respuesta
        resolve({
          valid: isValid,
          policy_details: {
            coverage: poliza.Tipo,
            holder_name: poliza.nombre_completo
          }
        });
      });
    } catch (err) {
      console.error('Error en la validación de póliza:', err);
      reject(err);
    }
  });
}
