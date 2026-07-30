const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Version 1: muestra el nombre y la canción favorita
app.get('/', (req, res) => {
  res.json({
    nombre: 'Carlos Andre Gatica Herrera',
    cancionFavorita: 'TBad Meets Evil - Fast Lane ft. Eminem, Royce Da 5.9'
  });
});

app.listen(PORT, () => {
  console.log(`API corriendo en http://localhost:${PORT}`);
});
