'use strict';

var path = require('path');
var http = require('http');
var cors = require('cors');
var express = require('express');
var oas3Tools = require('oas3-tools');
var serverPort = 8080;

// Create a new Express app first
var app = express();

// Apply CORS middleware to ALL requests
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  preflightContinue: false,
  optionsSuccessStatus: 204
}));

// Get the Swagger-generated routes
var expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), {
  routing: {
    controllers: path.join(__dirname, './controllers')
  }
});
var swaggerApp = expressAppConfig.getApp();

// Mount the Swagger routes AFTER applying CORS
app.use('/', swaggerApp);

// Initialize the server
http.createServer(app).listen(serverPort, function () {
  console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
  console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
});