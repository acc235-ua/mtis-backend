document.getElementById('indemnizacion-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const cliente = document.getElementById('cliente').value;

  const url = `http://localhost:8080/v1/indemnizacion?cliente=${encodeURIComponent(cliente)}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la respuesta del servidor');
      }
      return response.json(); // o .text() si no es JSON
    })
    .then(data => {
      document.getElementById('resultado').textContent = `Respuesta: ${JSON.stringify(data)}`;
    })
    .catch(error => {
      document.getElementById('resultado').textContent = `Error: ${error.message}`;
    });
});
