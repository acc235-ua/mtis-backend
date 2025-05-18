'use strict';

const db = require('../utils/db');
/**
 * Consulta si la poliza del cliente cubre la reclamación
 *
 * id_Reclamacion Integer 
 * cliente String 
 * returns Reclamacion
 **/
exports.reclamacionId_ReclamacionClienteIdGET = function(id_Reclamacion,cliente) {
 try
 {

    var dniUsuario;
    var idIncidencia;
    var tipoSeguro; //Nombre

    const queryRec = `
      SELECT DNI_Usuario,ID_Incidencia FROM RECLAMACIONES WHERE ID = ?
      `;

    const queryCli = `
      SELECT Tipo_Seguro FROM SEGURO WHERE DNI_Usuario = ?
      `;
    
    const queryInci = `
      SELECT Seguro_Cubre_Nombre FROM Incidencia I, Tipo_Incidencia T 
      WHERE I.ID = ? AND I.Tipo_Incidencia_ID = T.ID `;

      db.query(queryRec, [id_Reclamacion], (error, results) => {
        if (error) {
          console.error('Error al comprobar los datos de la reclamacion:', error);
          return reject(error);
        }
          
        if (results.length === 0) {
          return reject({
            status: 404,
            message: 'Reclamacion no encontrado'
          });
        }

        dniUsuario = results[0].DNI_Usuario;

        if (dniUsuario != cliente){
           return reject({
            status: 404,
            message: 'El cliente introducido no coincide con el de la reclamación.'
          });
        }
        idIncidencia =results[0].ID_Incidencia;
      });

      db.query(queryCli, [cliente], (error, results) => {
        if (error) {
          console.error('Error al comprobar los datos de la reclamacion:', error);
          return reject(error);
        }
          
        if (results.length === 0) {
          return reject({
            status: 404,
            message: 'El usuario no tiene ningún seguro asociado'
          });
        }

          tipoSeguro = results[0].Tipo_Seguro;
      });

      db.query(queryInci, [idIncidencia], (error, results) => {
        if (error) {
          console.error('Error al comprobar los datos de la reclamacion:', error);
          return reject(error);
        }
          
        if (results.length === 0) {
          return reject({
            status: 404,
            message: 'Error al consultar la incidencia.'
          });
        }

        if (tipoSeguro === results[0].Seguro_Cubre_Nombre)
        {
          return resolve({
            ok: true,
            status: 200
          });
        }
        else
        {
          return reject({
            status: 404,
            message: 'El seguro no cubre la incidencia.'
          });
        } 
      });

 }
 catch (err) {
    console.error('Error en el procesamiento:', err);
    reject(err);
  }
}

