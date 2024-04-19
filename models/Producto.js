const mongoose = require("mongoose");

const productoSchema = mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
    categoria: {
      type: String,
      required: true,
    },
    precio: {
      type: Number,
      required: true,
    },
    duracion: {
      type: String,
      required: true,
    },
    funciones: {
      type: String,
      required: true,
    },
  },
  { versionkey: false }
);

module.exports = mongoose.model("Producto", productoSchema);
