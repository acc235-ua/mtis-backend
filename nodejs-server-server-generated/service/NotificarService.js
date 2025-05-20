'use strict';
const db = require('../utils/db');
const nodemailer = require('nodemailer');
/**
 * Notifica al usuario la resolucion
 *
 * dni_usuario String 
 * aprobado boolean
 * no response value expected for this operation
 **/
exports.notificarId_usuarioPUT = function(dni_usuario, aprobado) {
  return new Promise((resolve, reject) => {  
  try {
      // Obtenemos el correo del usuario pero lo vamos a enviar al servidor
      // FAKE SMTP con la direccion del correo y asi verificamos la select de paso
      const queryCli = `
      SELECT Correo FROM USUARIO WHERE DNI = ?
      `;

      //console.log(dni_usuario);
      //console.log(aprobado);
      var correo;
      var respuesta;

      db.query(queryCli, [dni_usuario], (error, results) => {
        if (error) {
          console.error('Error al obtener el correo del usuario:', error);
          return reject({
            status: 404,
            message: 'Error al obtener el correo del usuario:' + error
          });
        }
          
        if (results.length === 0) {
          return reject({
            status: 404,
            message: 'El usuario no existe: ' + dni_usuario
          });
        }

          correo = results[0].Correo;
          //console.log(correo);

          const transporter = nodemailer.createTransport({
        host: 'localhost',
        port: 25,
        secure: false, 
        tls: {
          rejectUnauthorized: false
        }
      });

      if(aprobado)
      {
        respuesta = "Su reclamacion ha sido aprobada."
      }
      else
      {
        respuesta = "Su reclamacion ha sido rechazada."
      }

      
      const mailOptions = {
        from: 'asegur@dora.es',
        to: correo,
        subject: respuesta, 
        text: respuesta
      };

      // Envía el correo
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.error('Error al enviar el correo:', err);
          return reject(
            {
            status: 404,
            message: 'Error al obtener el correo del usuario:' + err
          }
          );
        } else {
          resolve({
            ok: true,
            status: 200
          });
        }
      });
      });
        
    }
    catch (err) {
      console.error('Error en el procesamiento:', err);
      reject({
            status: 404,
            message: 'Error al obtener el correo del usuario:' + err
          });
    }
  });
}

