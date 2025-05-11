# IncidentManagementApi.IndemnizacionApi

All URIs are relative to *https://api.incident-management.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**indemnizacionClienteIdGet**](IndemnizacionApi.md#indemnizacionClienteIdGet) | **GET** /indemnizacion/{cliente}/{id} | 

<a name="indemnizacionClienteIdGet"></a>
# **indemnizacionClienteIdGet**
> Indemnizacion indemnizacionClienteIdGet(cliente, id)



Consulta la cantidad a percibir por el usuario

### Example
```javascript
import {IncidentManagementApi} from 'incident_management_api';

let apiInstance = new IncidentManagementApi.IndemnizacionApi();
let cliente = "cliente_example"; // String | 
let id = 56; // Number | 

apiInstance.indemnizacionClienteIdGet(cliente, id, (error, data, response) => {
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

[**Indemnizacion**](Indemnizacion.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

