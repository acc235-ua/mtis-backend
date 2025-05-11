# IncidentManagementApi.SegurosApi

All URIs are relative to *https://api.incident-management.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**seguroClienteGet**](SegurosApi.md#seguroClienteGet) | **GET** /seguro/{cliente} | Consultar seguros de un cliente
[**seguroClienteIdGet**](SegurosApi.md#seguroClienteIdGet) | **GET** /seguro/{cliente}/{id} | Consultar seguro de un cliente
[**seguroClienteIdPut**](SegurosApi.md#seguroClienteIdPut) | **PUT** /seguro/{cliente}/{id} | Actualizar un seguro de un cliente
[**seguroPost**](SegurosApi.md#seguroPost) | **POST** /seguro | Crear un seguro
[**seguroPrecioPost**](SegurosApi.md#seguroPrecioPost) | **POST** /seguroPrecio | Calcular precio

<a name="seguroClienteGet"></a>
# **seguroClienteGet**
> Seguro seguroClienteGet(cliente)

Consultar seguros de un cliente

Consulta todos los seguros de un cliente

### Example
```javascript
import {IncidentManagementApi} from 'incident_management_api';

let apiInstance = new IncidentManagementApi.SegurosApi();
let cliente = "cliente_example"; // String | 

apiInstance.seguroClienteGet(cliente, (error, data, response) => {
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

[**Seguro**](Seguro.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="seguroClienteIdGet"></a>
# **seguroClienteIdGet**
> Seguro seguroClienteIdGet(cliente, id)

Consultar seguro de un cliente

Consulta un único seguro de un cliente

### Example
```javascript
import {IncidentManagementApi} from 'incident_management_api';

let apiInstance = new IncidentManagementApi.SegurosApi();
let cliente = "cliente_example"; // String | 
let id = 56; // Number | 

apiInstance.seguroClienteIdGet(cliente, id, (error, data, response) => {
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

[**Seguro**](Seguro.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="seguroClienteIdPut"></a>
# **seguroClienteIdPut**
> Seguro seguroClienteIdPut(body, cliente, id)

Actualizar un seguro de un cliente

Actualiza un seguro de un cliente

### Example
```javascript
import {IncidentManagementApi} from 'incident_management_api';

let apiInstance = new IncidentManagementApi.SegurosApi();
let body = new IncidentManagementApi.Seguro(); // Seguro | 
let cliente = "cliente_example"; // String | 
let id = 56; // Number | 

apiInstance.seguroClienteIdPut(body, cliente, id, (error, data, response) => {
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
 **body** | [**Seguro**](Seguro.md)|  | 
 **cliente** | **String**|  | 
 **id** | **Number**|  | 

### Return type

[**Seguro**](Seguro.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="seguroPost"></a>
# **seguroPost**
> Seguro seguroPost(body)

Crear un seguro

Crea un nuevo seguro a partir de datos

### Example
```javascript
import {IncidentManagementApi} from 'incident_management_api';

let apiInstance = new IncidentManagementApi.SegurosApi();
let body = new IncidentManagementApi.Seguro(); // Seguro | 

apiInstance.seguroPost(body, (error, data, response) => {
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
 **body** | [**Seguro**](Seguro.md)|  | 

### Return type

[**Seguro**](Seguro.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="seguroPrecioPost"></a>
# **seguroPrecioPost**
> Seguro seguroPrecioPost(body)

Calcular precio

Calcula el precio de un seguro segun sus datos

### Example
```javascript
import {IncidentManagementApi} from 'incident_management_api';

let apiInstance = new IncidentManagementApi.SegurosApi();
let body = new IncidentManagementApi.Seguro(); // Seguro | 

apiInstance.seguroPrecioPost(body, (error, data, response) => {
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
 **body** | [**Seguro**](Seguro.md)|  | 

### Return type

[**Seguro**](Seguro.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

