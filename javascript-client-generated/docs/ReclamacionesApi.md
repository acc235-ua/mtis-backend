# IncidentManagementApi.ReclamacionesApi

All URIs are relative to *https://api.incident-management.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**reclamacionIdReclamacionClienteIdGet**](ReclamacionesApi.md#reclamacionIdReclamacionClienteIdGet) | **GET** /reclamacion/{id_Reclamacion}/{cliente}/{id} | 

<a name="reclamacionIdReclamacionClienteIdGet"></a>
# **reclamacionIdReclamacionClienteIdGet**
> Reclamacion reclamacionIdReclamacionClienteIdGet(idReclamacion, cliente, id)



Consulta si la poliza del cliente cubre la reclamación

### Example
```javascript
import {IncidentManagementApi} from 'incident_management_api';

let apiInstance = new IncidentManagementApi.ReclamacionesApi();
let idReclamacion = 56; // Number | 
let cliente = "cliente_example"; // String | 
let id = 56; // Number | 

apiInstance.reclamacionIdReclamacionClienteIdGet(idReclamacion, cliente, id, (error, data, response) => {
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
 **idReclamacion** | **Number**|  | 
 **cliente** | **String**|  | 
 **id** | **Number**|  | 

### Return type

[**Reclamacion**](Reclamacion.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

