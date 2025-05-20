'use strict';

var utils = require('../utils/writer.js');
var Notificar = require('../service/NotificarService');

module.exports.notificarId_usuarioPUT = function notificarId_usuarioPUT (req, res, next) {
  const dni_usuario = req.query.dni_usuario;
  const aprobado = String(req.query.aprobado).toLowerCase() === 'true';
  //console.log("dni_usuario:", dni_usuario);
  //console.log("aprobado:", req.query.aprobado);
  Notificar.notificarId_usuarioPUT(dni_usuario, aprobado)
    .then(function (response) {
      utils.writeJson(res, utils.respondWithCode(response.status || 200, response));
    })
    .catch(function (response) {
      utils.writeJson(res, utils.respondWithCode(response.status || 500, response));
    });
};
