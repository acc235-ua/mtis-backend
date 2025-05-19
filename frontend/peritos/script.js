const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

document.addEventListener('DOMContentLoaded', function() {

     console.log('DOM completamente cargado');
    
     //----- Elementos del DOM
    const apisoap = document.getElementById('apisoap');
     // const boton = document.getElementById('prueba');

    //----FUNCIONES
   
    //---EVENT LISTENERS

    const app = express();
    const PORT = 3000;

    app.use(express.static('public'));
    app.use(bodyParser.json());

    apisoap.addEventListener('click', function () {
        const dni = '12345678A'; // podrías obtenerlo de un input también
     
        app.post('/solicita-perito', async (req, res) => {
        try {
            const dni = req.query.dni;
            const { data } = await axios.post(`http://localhost:8081/solicitaperito?dni=${dni}`);
            res.send(data);
        } catch (err) {
            res.status(500).send('Error al solicitar perito: ' + err.message);
        }
        });


    })

});