# IncidentManagementApi.PolizaApi

All URIs are relative to *https://api.incident-management.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**polizaClienteGet**](PolizaApi.md#polizaClienteGet) | **GET** /poliza/{cliente}/ | Consultar pólizas de un cliente
[**polizaClienteIdGet**](PolizaApi.md#polizaClienteIdGet) | **GET** /poliza/{cliente}/{id} | Consultar póliza de un cliente
[**polizaClientePost**](PolizaApi.md#polizaClientePost) | **POST** /poliza/{cliente}/ | Enviar póliza al cliente
[**polizaPost**](PolizaApi.md#polizaPost) | **POST** /poliza | Crear poliza

<a name="polizaClienteGet"></a>
# **polizaClienteGet**
> Poliza polizaClienteGet(cliente)

Consultar pólizas de un cliente

Consulta todas las pólizas de un cliente

### Example
```javascript
import {IncidentManagementApi} from 'incident_management_api';

let apiInstance = new IncidentManagementApi.PolizaApi();
let cliente = "cliente_example"; // String | 

apiInstance.polizaClienteGet(cliente, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cliente** | **String**|  | 

### Return type

[**Poliza**](Poliza.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="polizaClienteIdGet"></a>
# **polizaClienteIdGet**
> Poliza polizaClienteIdGet(cliente, id)

Consultar póliza de un cliente

Consulta una única póliza de un cliente

### Example
```javascript
import {IncidentManagementApi} from 'incident_management_api';

let apiInstance = new IncidentManagementApi.PolizaApi();
let cliente = "cliente_example"; // String | 
let id = 56; // Number | 

apiInstance.polizaClienteIdGet(cliente, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cliente** | **String**|  | 
 **id** | **Number**|  | 

### Return type

[**Poliza**](Poliza.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="polizaClientePost"></a>
# **polizaClientePost**
> Poliza polizaClientePost(cliente)

Enviar póliza al cliente

Envía la póliza al cliente

### Example
```javascript
import {IncidentManagementApi} from 'incident_management_api';

let apiInstance = new IncidentManagementApi.PolizaApi();
let cliente = "cliente_example"; // String | 

apiInstance.polizaClientePost(cliente, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cliente** | **String**|  | 

### Return type

[**Poliza**](Poliza.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="polizaPost"></a>
# **polizaPost**
> Poliza polizaPost(body)

Crear poliza

Crear una nueva polzia

### Example
```javascript
import {IncidentManagementApi} from 'incident_management_api';

let apiInstance = new IncidentManagementApi.PolizaApi();
let body = new IncidentManagementApi.Poliza(); // Poliza | 

apiInstance.polizaPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Poliza**](Poliza.md)|  | 

### Return type

[**Poliza**](Poliza.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

