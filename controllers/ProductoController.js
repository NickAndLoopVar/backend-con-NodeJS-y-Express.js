//Exportamos nuestro modelo
const Producto = require("../models/Producto");

//Crear una funcion: agregar productos

exports.agregarProductos = async (req, res) => {
  try {
    let productos = new Producto(req.body);
    await productos.save();
    res.send(productos);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al agregar un producto");
  }
};

//Mostrar productos

exports.mostrarProductos = async (req, res) => {
  try {
    let productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al agregar un producto");
  }
};

//Mostrar un producto

exports.mostrarUnProducto = async (req, res) => {
  try {
    let productos = await Producto.findById(req.params.id);
    if (!productos) {
      res.status(404).json({ msg: "No se encuentra un producto con ese ID" });
    }
    res.send(productos);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al buscar el producto en la web");
  }
};

//Funcion para eliminar productos
exports.eliminarProductos = async (req, res) => {
  try {
    let productos = await Producto.findById(req.params.id);
    if (!productos) {
      res.status(404).json({ msg: "El producto no existe" });
      return;
    }

    await Producto.findOneAndDelete({ _id: req.params.id });
    res.json({ msg: "El producto fue eliminado" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al eliminar un producto en la BD");
  }
};

//Modificar productos

exports.modificarProducto = async (req, res) => {
  try {
    let producto = await Producto.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!producto) {
      return res.status(404).send("Producto no encontrado");
    }
    res.json(producto);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al modificar un producto");
  }
};
