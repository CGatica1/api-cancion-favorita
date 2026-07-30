const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Version 1: muestra el nombre y la canción favorita
app.get('/', (req, res) => {
  res.json({
    nombre: 'Carlos Andre Gatica Herrera',
    albumFavorita: 'DAMN'
  });
});

app.listen(PORT, () => {
  console.log(`API corriendo en http://localhost:${PORT}`);
});
