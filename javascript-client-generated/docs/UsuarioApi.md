# IncidentManagementApi.UsuarioApi

All URIs are relative to *https://api.incident-management.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userValidateuserNifGet**](UsuarioApi.md#userValidateuserNifGet) | **GET** /user/validate{user_nif} | Validacion de usuario

<a name="userValidateuserNifGet"></a>
# **userValidateuserNifGet**
> userValidateuserNifGet(userNif)

Validacion de usuario

Validacion de usuario

### Example
```javascript
import {IncidentManagementApi} from 'incident_management_api';

let apiInstance = new IncidentManagementApi.UsuarioApi();
let userNif = "userNif_example"; // String | 

apiInstance.userValidateuserNifGet(userNif, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userNif** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

