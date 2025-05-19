'use strict';

var utils = require('../utils/writer.js');
var Reclamaciones = require('../service/ReclamacionesService');

module.exports.reclamacionId_ReclamacionClienteIdGET = function reclamacionId_ReclamacionClienteIdGET (req, res, next, id_Reclamacion, cliente) {
  Reclamaciones.reclamacionId_ReclamacionClienteIdGET(id_Reclamacion, cliente)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
