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
import ApiClient from './ApiClient';
import AuthLoginBody from './model/AuthLoginBody';
import AuthRegisterBody from './model/AuthRegisterBody';
import Comprobacion from './model/Comprobacion';
import EvidenceUploadBody from './model/EvidenceUploadBody';
import Fraude from './model/Fraude';
import Incidencias from './model/Incidencias';
import IncidentsBody from './model/IncidentsBody';
import IncidentsLocation from './model/IncidentsLocation';
import IncidentsReportedBy from './model/IncidentsReportedBy';
import Indemnizacion from './model/Indemnizacion';
import InlineResponse200 from './model/InlineResponse200';
import InlineResponse2001 from './model/InlineResponse2001';
import InlineResponse2001PolicyDetails from './model/InlineResponse2001PolicyDetails';
import InlineResponse2002 from './model/InlineResponse2002';
import InlineResponse201 from './model/InlineResponse201';
import InlineResponse2011 from './model/InlineResponse2011';
import InsuranceClaimBody from './model/InsuranceClaimBody';
import ListaInc from './model/ListaInc';
import PolicyValidateBody from './model/PolicyValidateBody';
import Poliza from './model/Poliza';
import Reclamacion from './model/Reclamacion';
import Seguro from './model/Seguro';
import Usuario from './model/Usuario';
import ClaimsApi from './api/ClaimsApi';
import ComprobacionApi from './api/ComprobacionApi';
import EvidenciaApi from './api/EvidenciaApi';
import FraudeApi from './api/FraudeApi';
import IncidenciasApi from './api/IncidenciasApi';
import IncidenteApi from './api/IncidenteApi';
import IndemnizacionApi from './api/IndemnizacionApi';
import IniciarSesionApi from './api/IniciarSesionApi';
import NotificarApi from './api/NotificarApi';
import PolizaApi from './api/PolizaApi';
import ReclamacionesApi from './api/ReclamacionesApi';
import RegistrarApi from './api/RegistrarApi';
import SegurosApi from './api/SegurosApi';
import UsuarioApi from './api/UsuarioApi';

/**
* API_para_la_gestin_de_incidentes_partes_de_seguros_y_evidencias_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var IncidentManagementApi = require('index'); // See note below*.
* var xxxSvc = new IncidentManagementApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new IncidentManagementApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new IncidentManagementApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new IncidentManagementApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AuthLoginBody model constructor.
     * @property {module:model/AuthLoginBody}
     */
    AuthLoginBody,

    /**
     * The AuthRegisterBody model constructor.
     * @property {module:model/AuthRegisterBody}
     */
    AuthRegisterBody,

    /**
     * The Comprobacion model constructor.
     * @property {module:model/Comprobacion}
     */
    Comprobacion,

    /**
     * The EvidenceUploadBody model constructor.
     * @property {module:model/EvidenceUploadBody}
     */
    EvidenceUploadBody,

    /**
     * The Fraude model constructor.
     * @property {module:model/Fraude}
     */
    Fraude,

    /**
     * The Incidencias model constructor.
     * @property {module:model/Incidencias}
     */
    Incidencias,

    /**
     * The IncidentsBody model constructor.
     * @property {module:model/IncidentsBody}
     */
    IncidentsBody,

    /**
     * The IncidentsLocation model constructor.
     * @property {module:model/IncidentsLocation}
     */
    IncidentsLocation,

    /**
     * The IncidentsReportedBy model constructor.
     * @property {module:model/IncidentsReportedBy}
     */
    IncidentsReportedBy,

    /**
     * The Indemnizacion model constructor.
     * @property {module:model/Indemnizacion}
     */
    Indemnizacion,

    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200,

    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001,

    /**
     * The InlineResponse2001PolicyDetails model constructor.
     * @property {module:model/InlineResponse2001PolicyDetails}
     */
    InlineResponse2001PolicyDetails,

    /**
     * The InlineResponse2002 model constructor.
     * @property {module:model/InlineResponse2002}
     */
    InlineResponse2002,

    /**
     * The InlineResponse201 model constructor.
     * @property {module:model/InlineResponse201}
     */
    InlineResponse201,

    /**
     * The InlineResponse2011 model constructor.
     * @property {module:model/InlineResponse2011}
     */
    InlineResponse2011,

    /**
     * The InsuranceClaimBody model constructor.
     * @property {module:model/InsuranceClaimBody}
     */
    InsuranceClaimBody,

    /**
     * The ListaInc model constructor.
     * @property {module:model/ListaInc}
     */
    ListaInc,

    /**
     * The PolicyValidateBody model constructor.
     * @property {module:model/PolicyValidateBody}
     */
    PolicyValidateBody,

    /**
     * The Poliza model constructor.
     * @property {module:model/Poliza}
     */
    Poliza,

    /**
     * The Reclamacion model constructor.
     * @property {module:model/Reclamacion}
     */
    Reclamacion,

    /**
     * The Seguro model constructor.
     * @property {module:model/Seguro}
     */
    Seguro,

    /**
     * The Usuario model constructor.
     * @property {module:model/Usuario}
     */
    Usuario,

    /**
    * The ClaimsApi service constructor.
    * @property {module:api/ClaimsApi}
    */
    ClaimsApi,

    /**
    * The ComprobacionApi service constructor.
    * @property {module:api/ComprobacionApi}
    */
    ComprobacionApi,

    /**
    * The EvidenciaApi service constructor.
    * @property {module:api/EvidenciaApi}
    */
    EvidenciaApi,

    /**
    * The FraudeApi service constructor.
    * @property {module:api/FraudeApi}
    */
    FraudeApi,

    /**
    * The IncidenciasApi service constructor.
    * @property {module:api/IncidenciasApi}
    */
    IncidenciasApi,

    /**
    * The IncidenteApi service constructor.
    * @property {module:api/IncidenteApi}
    */
    IncidenteApi,

    /**
    * The IndemnizacionApi service constructor.
    * @property {module:api/IndemnizacionApi}
    */
    IndemnizacionApi,

    /**
    * The IniciarSesionApi service constructor.
    * @property {module:api/IniciarSesionApi}
    */
    IniciarSesionApi,

    /**
    * The NotificarApi service constructor.
    * @property {module:api/NotificarApi}
    */
    NotificarApi,

    /**
    * The PolizaApi service constructor.
    * @property {module:api/PolizaApi}
    */
    PolizaApi,

    /**
    * The ReclamacionesApi service constructor.
    * @property {module:api/ReclamacionesApi}
    */
    ReclamacionesApi,

    /**
    * The RegistrarApi service constructor.
    * @property {module:api/RegistrarApi}
    */
    RegistrarApi,

    /**
    * The SegurosApi service constructor.
    * @property {module:api/SegurosApi}
    */
    SegurosApi,

    /**
    * The UsuarioApi service constructor.
    * @property {module:api/UsuarioApi}
    */
    UsuarioApi
};
