'use strict';


/**
 * Consultar el estado de un parte de seguro
 *
 * claim_id String 
 * returns inline_response_200_2
 **/
exports.claimsClaim_idStatusGET = function(claim_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "claim_id" : "claim_id",
  "status" : "en revision"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

