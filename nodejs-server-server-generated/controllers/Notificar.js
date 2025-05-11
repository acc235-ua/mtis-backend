'use strict';

var utils = require('../utils/writer.js');
var Notificar = require('../service/NotificarService');

module.exports.notificarId_usuarioPUT = function notificarId_usuarioPUT (req, res, next, id_usuario) {
  Notificar.notificarId_usuarioPUT(id_usuario)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
