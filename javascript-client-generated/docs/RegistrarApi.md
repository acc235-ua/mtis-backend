# IncidentManagementApi.RegistrarApi

All URIs are relative to *https://api.incident-management.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authRegisterPost**](RegistrarApi.md#authRegisterPost) | **POST** /auth/register | Registrar un nuevo usuario

<a name="authRegisterPost"></a>
# **authRegisterPost**
> authRegisterPost(body)

Registrar un nuevo usuario

### Example
```javascript
import {IncidentManagementApi} from 'incident_management_api';

let apiInstance = new IncidentManagementApi.RegistrarApi();
let body = new IncidentManagementApi.AuthRegisterBody(); // AuthRegisterBody | 

apiInstance.authRegisterPost(body, (error, data, response) => {
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
 **body** | [**AuthRegisterBody**](AuthRegisterBody.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

