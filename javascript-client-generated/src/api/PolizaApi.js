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
import ApiClient from "../ApiClient";
import Poliza from '../model/Poliza';

/**
* Poliza service.
* @module api/PolizaApi
* @version 1.0.0
*/
export default class PolizaApi {

    /**
    * Constructs a new PolizaApi. 
    * @alias module:api/PolizaApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the polizaClienteGet operation.
     * @callback moduleapi/PolizaApi~polizaClienteGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Poliza{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consultar pólizas de un cliente
     * Consulta todas las pólizas de un cliente
     * @param {String} cliente 
     * @param {module:api/PolizaApi~polizaClienteGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    polizaClienteGet(cliente, callback) {
      
      let postBody = null;
      // verify the required parameter 'cliente' is set
      if (cliente === undefined || cliente === null) {
        throw new Error("Missing the required parameter 'cliente' when calling polizaClienteGet");
      }

      let pathParams = {
        'cliente': cliente
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Poliza;

      return this.apiClient.callApi(
        '/poliza/{cliente}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the polizaClienteIdGet operation.
     * @callback moduleapi/PolizaApi~polizaClienteIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Poliza{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consultar póliza de un cliente
     * Consulta una única póliza de un cliente
     * @param {String} cliente 
     * @param {Number} id 
     * @param {module:api/PolizaApi~polizaClienteIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    polizaClienteIdGet(cliente, id, callback) {
      
      let postBody = null;
      // verify the required parameter 'cliente' is set
      if (cliente === undefined || cliente === null) {
        throw new Error("Missing the required parameter 'cliente' when calling polizaClienteIdGet");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling polizaClienteIdGet");
      }

      let pathParams = {
        'cliente': cliente,'id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Poliza;

      return this.apiClient.callApi(
        '/poliza/{cliente}/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the polizaClientePost operation.
     * @callback moduleapi/PolizaApi~polizaClientePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Poliza{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enviar póliza al cliente
     * Envía la póliza al cliente
     * @param {String} cliente 
     * @param {module:api/PolizaApi~polizaClientePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    polizaClientePost(cliente, callback) {
      
      let postBody = null;
      // verify the required parameter 'cliente' is set
      if (cliente === undefined || cliente === null) {
        throw new Error("Missing the required parameter 'cliente' when calling polizaClientePost");
      }

      let pathParams = {
        'cliente': cliente
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Poliza;

      return this.apiClient.callApi(
        '/poliza/{cliente}/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the polizaPost operation.
     * @callback moduleapi/PolizaApi~polizaPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Poliza{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Crear poliza
     * Crear una nueva polzia
     * @param {module:model/Poliza} body 
     * @param {module:api/PolizaApi~polizaPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    polizaPost(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling polizaPost");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Poliza;

      return this.apiClient.callApi(
        '/poliza', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}