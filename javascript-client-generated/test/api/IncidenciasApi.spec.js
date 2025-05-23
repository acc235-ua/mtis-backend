/*
 * Incident Management API
 * API para la gestión de incidentes, partes de seguros y evidencias.
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.68
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.IncidentManagementApi);
  }
}(this, function(expect, IncidentManagementApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new IncidentManagementApi.IncidenciasApi();
  });

  describe('(package)', function() {
    describe('IncidenciasApi', function() {
      describe('incidenceContractuserNifTypeIncidenceGet', function() {
        it('should call incidenceContractuserNifTypeIncidenceGet successfully', function(done) {
          // TODO: uncomment, update parameter values for incidenceContractuserNifTypeIncidenceGet call
          /*

          instance.incidenceContractuserNifTypeIncidenceGet(userNif, typeIncidence, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('incidenceRecentuserNifPost', function() {
        it('should call incidenceRecentuserNifPost successfully', function(done) {
          // TODO: uncomment, update parameter values for incidenceRecentuserNifPost call and complete the assertions
          /*

          instance.incidenceRecentuserNifPost(userNif, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(IncidentManagementApi.ListaInc);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('incidenceTypefileInfGet', function() {
        it('should call incidenceTypefileInfGet successfully', function(done) {
          // TODO: uncomment, update parameter values for incidenceTypefileInfGet call
          /*

          instance.incidenceTypefileInfGet(fileInf, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
