const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/enviar-soap', async (req, res) => {
  try {
    const { soapBody } = req.body;
    const { data } = await axios.post('http://localhost:9091/empleados', soapBody, {
      headers: {
        'Content-Type': 'text/xml; charset=utf-8'
      }
    });
    res.send(data);
  } catch (err) {
    res.status(500).send(err.toString());
  }
});

app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`);
});

app.post('/crear-seguro', async (req, res) => {
  try {
    const { data } = await axios.post('http://localhost:8081/seguro', req.body);
    res.send(data); // Si tu backend devuelve JSON, puedes usar res.json(data)
  } catch (err) {
    res.status(500).send('Error al crear seguro: ' + err.message);
  }
});



app.post('/solicita-perito', async (req, res) => {
  try {
    const dni = req.query.dni;
    const { data } = await axios.post(`http://localhost:8081/solicitaperito?dni=${dni}`);
    res.send(data);
  } catch (err) {
    res.status(500).send('Error al solicitar perito: ' + err.message);
  }
});

