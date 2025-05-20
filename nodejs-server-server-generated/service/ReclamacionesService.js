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
 return new Promise((resolve, reject) => {  
  try
 {

    var dniUsuario;
    var idIncidencia;
    var tipoSeguro; //Nombre

    //console.log(id_Reclamacion);
    //console.log(cliente);

    const queryRec = `
      SELECT DNI_Usuario,ID_Incidencia FROM RECLAMACIONES WHERE ID = ?
      `;

    const queryCli = `
      SELECT Tipo_Seguro FROM SEGURO WHERE DNI_Usuario = ?
      `;
    
    const queryInci = `
      SELECT Seguro_Cubre_Nombre FROM Incidencia, Tipo_Incidencia 
      WHERE Incidencia.ID = ? AND Incidencia.Tipo_Incidencia_ID = Tipo_Incidencia.ID`;

      db.query(queryRec, [id_Reclamacion], (error, results) => {
        if (error) {
          console.error('Error al comprobar los datos de la reclamacion:', error);
          return reject({
              status: 404,
              message: 'Error al consultar la incidencia: ' + error
            });
        }
          
        if (results.length === 0) {
          return reject({
            status: 404,
            message: 'Reclamacion no encontrado'
          });
        }

        dniUsuario = results[0].DNI_Usuario;
        //console.log(dniUsuario);

        if (dniUsuario != cliente){
           return reject({
            status: 404,
            message: 'El cliente introducido no coincide con el de la reclamación.'
          });
        }
        //console.log(results);
        idIncidencia =results[0].ID_Incidencia;
        //console.log(idIncidencia);

        db.query(queryCli, [cliente], (error, results) => {
        if (error) {
          console.error('Error al comprobar los datos de la reclamacion:', error);
          return reject({
              status: 404,
              message: 'Error al consultar la incidencia: ' + error
            });
        }
          
        if (results.length === 0) {
          return reject({
            status: 404,
            message: 'El usuario no tiene ningún seguro asociado'
          });
        }
          //console.log(results);
          tipoSeguro = results[0].Tipo_Seguro;
          //console.log(tipoSeguro);
          //console.log(idIncidencia);

          db.query(queryInci, [idIncidencia], (error, results) => {
          if (error) {
            console.error('Error al comprobar los datos de la reclamacion:', error);
            return reject({
              status: 404,
              message: 'Error al consultar la incidencia: ' + error
            });
          }
            //console.log(idIncidencia);
            //console.log(results);
          if (results.length == 0) {
            return reject({
              status: 404,
              message: 'Error al consultar la incidencia.'
            });
          }
          //console.log(results);
          if (tipoSeguro == results[0].Seguro_Cubre_Nombre)
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
        });
      });  
 }
 catch (err) {
    console.error('Error en el procesamiento:', err);
    reject({
              status: 404,
              message: 'Error en el procesamiento:' + err
            });
  }
});
}

