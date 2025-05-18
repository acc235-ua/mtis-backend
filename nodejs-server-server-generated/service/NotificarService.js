'use strict';
const db = require('../utils/db');
const nodemailer = require('nodemailer');
/**
 * Notifica al usuario la resolucion
 *
 * id_usuario String 
 * aprobado boolean
 * no response value expected for this operation
 **/
exports.notificarId_usuarioPUT = function(id_usuario, aprobado) {
    try {
      // Obtenemos el correo del usuario pero lo vamos a enviar al servidor
      // FAKE SMTP con la direccion del correo y asi verificamos la select de paso
      const queryCli = `
      SELECT Correo FROM SEGURO WHERE DNI_Usuario = ?
      `;

      var correo;
      var respuesta;

      db.query(queryCli, [id_usuario], (error, results) => {
        if (error) {
          console.error('Error al obtener el correo del usuario:', error);
          return reject(error);
        }
          
        if (results.length === 0) {
          return reject({
            status: 404,
            message: 'El usuario no existe'
          });
        }

          correo = results[0].correo;
      });
        
      // Configura el transporte SMTP para FakeSMTP (localhost:2525)
      const transporter = nodemailer.createTransport({
        host: 'localhost',
        port: 2525,
        secure: false, // FakeSMTP normalmente no usa TLS
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

      // Configura el contenido del correo
      const mailOptions = {
        from: 'asegur@dora.es',
        to: correo,
        subject: correo, // El asunto es la dirección de correo
        text: respuesta
      };

      // Envía el correo
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.error('Error al enviar el correo:', err);
          return reject(err);
        } else {
          resolve({
            ok: true,
            status: 200
          });
        }
      });

    }
    catch (err) {
      console.error('Error en el procesamiento:', err);
      reject(err);
    }
}

