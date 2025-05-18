'use strict';

var utils = require('../utils/writer.js');
var Evidencia = require('../service/EvidenciaService');

module.exports.evidenceUploadPOST = function evidenceUploadPOST (req, res, next) {
  // Pass the request body to the service function
  Evidencia.evidenceUploadPOST(req.body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};