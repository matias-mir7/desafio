document.getElementById("registroForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = {
    nombre: document.getElementById("Nombre").value,
    apellido: document.getElementById("Apellido").value,
    fechaNacimiento: document.getElementById("FechaNacimiento").value,
  };

  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Error en la solicitud: " + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      console.log("Respuesta del servidor:", data);
      console.log("Los datos se han guardado correctamente.");
    })
    .catch(error => {
      console.error("Error al realizar la solicitud:", error);
    });
});
