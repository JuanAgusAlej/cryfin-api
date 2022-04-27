const { Schema, model } = require("mongoose");

const ProyectoSchema = Schema({
  titulo: {
    type: String,
    required: [true, "El titulo es obligatorio"],
    unique: true,
  },
  estado: {
    type: Boolean,
    required: true,
    default: true,
  },
  billetera: {
    type: String,
    ref: "Billetera",
    required: true,
  },
  monto: {
    type: Number,
    default: 0,
    required: true,
  },
  fechaCreado: {
    type: Date,
    ref: "Fecha creado",
    default: Date.now.toLocaleDateString,
  },

  descripcion: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    default: "https://i.imgur.com/Xk1Z9qg.jpg",
  },
});

ProyectoSchema.methods.toJSON = function () {
  const { __v, estado, ...proyecto } = this.toObject();

  return proyecto;
};

module.exports = model("Proyecto", ProyectoSchema);
