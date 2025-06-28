// Elaborado por: Cindia López, Junio 2025
// Ejercicio 2 - Sesión Didáctica 2 - Programación 3
// Asesor: Prof. Carlos Márquez

// Archivo mensaje.js
// Este archivo define el esquema de datos para los mensajes de contacto utilizando Mongoose.
// Forma parte de la Fase II del proyecto, donde implementé la conexión entre el frontend y la base de datos MongoDB Atlas.

// Importación del módulo mongoose para definir el esquema
import mongoose from 'mongoose';

// Definición del esquema para los mensajes recibidos desde el formulario
const MensajeSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true // Campo obligatorio
  },
  email: {
    type: String,
    required: true // Campo obligatorio
  },
  telefono: {
    type: String,
    required: true // Campo obligatorio
  },
  mensaje: {
    type: String,
    required: true // Campo obligatorio
  },
  fecha: {
    type: Date,
    default: Date.now // Se asigna automáticamente la fecha actual
  }
});

// Exportación del modelo para poder utilizarlo en otras partes del backend
export default mongoose.model('Mensaje', MensajeSchema);
