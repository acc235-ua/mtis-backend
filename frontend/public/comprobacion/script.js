document.getElementById('comprobacion-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const port = "8060";
  const cliente = document.getElementById('cliente').value;
  const seguro = document.getElementById('seguro').value;

  const url = `http://localhost:${port}/v1/comprobar?cliente=${encodeURIComponent(cliente)}&seguro=${encodeURIComponent(seguro)}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la respuesta del servidor');
      }
      return response.json(); 
    })
    .then(data => {
      document.getElementById('resultado').textContent = `Respuesta: ${JSON.stringify(data)}`;
    })
    .catch(error => {
      document.getElementById('resultado').textContent = `Error: ${error.message}`;
    });
});
