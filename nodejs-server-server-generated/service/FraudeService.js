'use strict';
const db = require('../utils/db');

exports.fraudCheckByDni = function(dni_usuario) {
  return new Promise(function(resolve, reject) {
    const sql = `
      SELECT MIN(Id) AS Id, Titulo, COUNT(*) AS num_incidencias
      FROM incidencia
      WHERE DNI_Usuario = ?
        AND Fecha >= DATE_SUB(NOW(), INTERVAL 3 MONTH)
      GROUP BY Titulo
      HAVING num_incidencias > 2
    `;

    db.query(sql, [dni_usuario], (err, results) => {
      if (err) {
        return reject({
          error: true,
          message: 'Error al consultar la base de datos',
          details: err
        });
      }

      const posibleFraude = results.length > 0;

      if (posibleFraude) {
        const fraude = results[0]; // solo insertamos una por simplificar
        const checkSql = `
          SELECT * FROM fraude
          WHERE DNI_Usuario = ? AND ID_Incidencia = ?
        `;

        db.query(checkSql, [dni_usuario, fraude.Id], (err, existing) => {
          if (err) {
            return reject({
              error: true,
              message: 'Error al verificar existencia en la tabla fraude',
              details: err
            });
          }

          if (existing.length > 0) {
            return resolve({
              usuario: dni_usuario,
              posibleFraude: true,
              motivo: 'Este usuario ya ha sido registrado como posible fraude con el mismo ID de incidencia.',
              titulo: existing[0].Titulo
            });
          }

          // Insertar nuevo fraude
          const insertSql = `
            INSERT INTO fraude (DNI_Usuario, ID_Incidencia, Es_fraude, Titulo)
            VALUES (?, ?, ?, ?)
          `;

          db.query(insertSql, [dni_usuario, fraude.Id, true, fraude.Titulo], (err) => {
            if (err) {
              return reject({
                error: true,
                message: 'Error al guardar el resultado en la tabla fraude',
                details: err
              });
            }

            return resolve({
              usuario: dni_usuario,
              posibleFraude: true,
              mensaje: 'Se detectaron incidencias similares en los últimos 3 meses. Posible fraude.',
              titulo: fraude.Titulo
            });
          });
        });
      } else {
        resolve({
          usuario: dni_usuario,
          posibleFraude: false,
          mensaje: 'No se detectaron incidencias repetidas recientemente.'
        });
      }
    });
  });
};
