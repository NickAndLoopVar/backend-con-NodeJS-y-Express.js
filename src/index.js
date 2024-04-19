const express = require("express");
const conectarBD = require("../config/db");
const cors = require("cors");

//Configuracion express y puerto
const app = express();
const port = 5000;
app.use(express.json());

//Aqui van las rutas de los modulos
app.use("/api/clientes", require("../routes/RoutesCliente"));
app.use("/api/productos", require("../routes/RoutesProducto"));

//Enlazamos la coneccion de la base de datos
conectarBD();
app.use(cors());

//Se configura
app.listen(port, () =>
  console.log(
    "Nuestro servidor se encuentra conectado http://localhost:5000",
    port
  )
);

//Se prueba esta ruta en el navegador
app.get("/", (req, res) => {
  res.send("Bienvenido nuestro servidor esta configurado");
});
