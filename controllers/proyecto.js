const { response, request } = require("express");
const Proyecto = require("../models/proyecto");

//Get para traer todos los Proyecto --------------------
const obtenerProyectos = async (req = request, res = response) => {
  const { limite = 0, desde = 0 } = req.query;
  const query = { estado: true };

  const [total, proyectos] = await Promise.all([
    Proyecto.countDocuments(query),
    Proyecto.find(query).skip(Number(desde)).limit(Number(limite)),
    //Como traigo los datos de los usuarios y las categorias?🤔
  ]);

  res.json({
    total,
    proyectos,
  });
};

//Crear Proyecto--------------------------------------
const crearProyecto = async (req, res = response) => {
  const { monto, billetera, descripcion, fechaCreado, img } = req.body;
  const titulo = req.body.titulo.toUpperCase();

  //Generar la data a guardar
  const data = {
    titulo,
    billetera,
    monto,
    descripcion,
    fechaCreado,
    img,
  };

  const proyecto = new Proyecto(data);

  //grabar en la base de datos
  await proyecto.save();

  res.status(201).json(proyecto);
};


module.exports = {
  crearProyecto,
  obtenerProyectos,
   
};
