import dotenv from 'dotenv';
import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = `${__dirname}/.env`;

// Verificar si el archivo .env existe y mostrar su contenido
console.log('📂 Buscando archivo .env en:', envPath);
if (fs.existsSync(envPath)) {
  console.log('✅ Archivo .env encontrado');
  console.log('📄 Contenido del .env:\n', fs.readFileSync(envPath, 'utf-8'));
} else {
  console.log('❌ Archivo .env NO encontrado');
}

// Cargar las variables de entorno desde .env
dotenv.config({ path: envPath });

// Confirmar que cargó correctamente la URI
console.log('🔍 URI cargada:', process.env.MONGO_URI);

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Mensaje from './models/Mensaje.js';

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Conectado a MongoDB'))
  .catch(err => console.error('❌ Error en la conexión:', err));

// Ruta POST para guardar mensajes
app.post('/api/contacto', async (req, res) => {
  console.log('📥 Datos recibidos del frontend:', req.body);

  try {
    const nuevoMensaje = new Mensaje(req.body);
    await nuevoMensaje.save();
    console.log('✅ Mensaje guardado exitosamente');
    res.status(201).json({ mensaje: 'Mensaje guardado exitosamente' });
  } catch (error) {
    console.error('❌ Error al guardar el mensaje:', error);
    res.status(500).json({ error: 'Error al guardar el mensaje' });
  }
});

// Ruta GET para obtener todos los mensajes
app.get('/api/contacto', async (req, res) => {
  try {
    const mensajes = await Mensaje.find().sort({ fecha: -1 });
    res.json(mensajes);
  } catch (error) {
    console.error('❌ Error al obtener los mensajes:', error);
    res.status(500).json({ error: 'Error al obtener los mensajes' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
});
