'use strict';

var utils = require('../utils/writer.js');
var Fraude = require('../service/FraudeService');

module.exports.fraudList_incidencesIncidence_usrGET = function fraudList_incidencesIncidence_usrGET (req, res, next, list_incidences, incidence_usr) {
  Fraude.fraudList_incidencesIncidence_usrGET(list_incidences, incidence_usr)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
