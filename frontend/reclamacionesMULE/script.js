document.getElementById('reclamaciones-mule-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const cliente = document.getElementById('cliente').value;
  const seguroId = document.getElementById('seguroId').value;
  const reclamacionId = document.getElementById('reclamacionId').value;

  const url = `http://localhost:8081/reclamaciones?cliente=${encodeURIComponent(cliente)}&seguroId=${encodeURIComponent(seguroId)}&reclamacionId=${encodeURIComponent(reclamacionId)}`;

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
