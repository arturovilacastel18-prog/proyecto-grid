function cambiarVideo(nuevaRuta) {
  const video = document.getElementById('miVideo');
  const fuente = document.getElementById('fuenteVideo');

  // Cambiar la ruta del archivo
  fuente.src = nuevaRuta;

  // Recargar el reproductor con la nueva fuente
  video.load();

  // Reproducir automáticamente (opcional)
  video.play();
}