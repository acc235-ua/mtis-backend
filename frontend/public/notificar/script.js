document.getElementById('notificar-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const port = "8060";
  const dniUsuario = document.getElementById('dni_usuario').value;
  const aprobado = document.getElementById('aprobado').checked;

  const url = `http://localhost:${port}/v1/notificar/?dni_usuario=${encodeURIComponent(dniUsuario)}&aprobado=${aprobado}`;

  fetch(url, {
    method: 'PUT'
  })
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
