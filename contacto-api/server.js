// Elaborado por: Cindia López, Junio 2025
// Ejercicio 2 - Sesión Didáctica 2 - Programación 3
// Asesor: Prof. Carlos Márquez

// Archivo server.js
// Este archivo configura y ejecuta el servidor Express. Define las rutas para guardar y consultar mensajes desde el frontend,
// y establece la conexión con la base de datos MongoDB Atlas utilizando variables de entorno.

// Fase II: En esta fase desarrollé el backend completo. Implementé la conexión segura con MongoDB usando dotenv,
// creé el modelo de datos con Mongoose, y definí las rutas POST y GET para manejar los mensajes del formulario de contacto.

import dotenv from 'dotenv';
import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

// Obtengo la ruta absoluta del archivo .env
const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = `${__dirname}/.env`;

// Verifico si el archivo .env existe y muestro su contenido en consola
console.log('📂 Buscando archivo .env en:', envPath);
if (fs.existsSync(envPath)) {
  console.log('✅ Archivo .env encontrado');
  console.log('📄 Contenido del .env:\n', fs.readFileSync(envPath, 'utf-8'));
} else {
  console.log('❌ Archivo .env NO encontrado');
}

// Cargo las variables de entorno desde el archivo .env
dotenv.config({ path: envPath });

// Confirmo que la URI de MongoDB fue cargada correctamente
console.log('🔍 URI cargada:', process.env.MONGO_URI);

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Mensaje from './models/Mensaje.js'; // Importo el modelo de datos

const app = express();
app.use(cors()); // Habilito CORS para permitir peticiones desde el frontend
app.use(express.json()); // Permito recibir datos en formato JSON

// Conexión a MongoDB Atlas usando la URI del archivo .env
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Conectado a MongoDB'))
  .catch(err => console.error('❌ Error en la conexión:', err));

// Ruta POST para guardar un nuevo mensaje
app.post('/api/contacto', async (req, res) => {
  console.log('📥 Datos recibidos del frontend:', req.body);

  try {
    const nuevoMensaje = new Mensaje(req.body); // Creo una nueva instancia del modelo con los datos recibidos
    await nuevoMensaje.save(); // Guardo el mensaje en la base de datos
    console.log('✅ Mensaje guardado exitosamente');
    res.status(201).json({ mensaje: 'Mensaje guardado exitosamente' });
  } catch (error) {
    console.error('❌ Error al guardar el mensaje:', error);
    res.status(500).json({ error: 'Error al guardar el mensaje' });
  }
});

// Ruta GET para obtener todos los mensajes almacenados
app.get('/api/contacto', async (req, res) => {
  try {
    const mensajes = await Mensaje.find().sort({ fecha: -1 }); // Ordeno los mensajes por fecha descendente
    res.json(mensajes); // Devuelvo los mensajes al frontend
  } catch (error) {
    console.error('❌ Error al obtener los mensajes:', error);
    res.status(500).json({ error: 'Error al obtener los mensajes' });
  }
});

// Inicio del servidor en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
});
