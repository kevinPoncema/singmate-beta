// Define la función de predicción
function predict(modelName, version, image, apiKey) {
    // Configura la solicitud HTTP
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `https://classify.roboflow.com/${modelName}/${version}?api_key=${apiKey}`);
    xhr.setRequestHeader("Content-Type", "image/jpeg");
    xhr.send(image);
  
    // Verifica la respuesta
    if (xhr.status !== 200) {
      throw new Error(`Error al realizar la predicción: ${xhr.status}`);
    }
  
    // Devuelve la respuesta
    return JSON.parse(xhr.responseText);
  }
  
  // Adapta el código original
  document.addEventListener("DOMContentLoaded", function () {
      const video = document.getElementById("video");
      const captureButton = document.getElementById("captureButton");
      const canvas = document.getElementById("canvas");
      const context = canvas.getContext("2d");
      let capturedPhoto = null;
  
      // Acceder a la cámara
      navigator.mediaDevices
          .getUserMedia({ video: true })
          .then(function (stream) {
              video.srcObject = stream;
          })
          .catch(function (error) {
              console.error("Error al acceder a la cámara: " + error);
          });
  
      // Capturar una foto
      captureButton.addEventListener("click", function () {
          context.drawImage(video, 0, 0, canvas.width, canvas.height);
          capturedPhoto = canvas.toDataURL("image/jpeg");
          console.log("Foto capturada en formato base64:", capturedPhoto);
  
          // Realiza la predicción
          const prediction = predict("singm8", 1, capturedPhoto, "YOUR_API_KEY");
  
          // Muestra la predicción
          let label = document.getElementById("eti");
          label.innerHTML = prediction.class;
      });
  });
  

  

