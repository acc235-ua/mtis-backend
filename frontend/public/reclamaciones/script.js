document.getElementById('reclamacion-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const port = "8060";
  const idReclamacion = document.getElementById('id_reclamacion').value;
  const cliente = document.getElementById('cliente').value;

  const url = `http://localhost:${port}/v1/reclamacion/${encodeURIComponent(idReclamacion)}/${encodeURIComponent(cliente)}`;

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
