# Backend con Node.js y Express.js para MongoDB

_Este proyecto es un backend desarrollado en Node.js con Express.js, diseñado para interactuar con una base de datos MongoDB. Proporciona una API RESTful que permite realizar operaciones CRUD (Crear, Leer, Actualizar, Borrar) en la base de datos._

## Capturas

### Se configura el package.json agragando las dependencias y modificando el script para levantar el servidor

<img src="https://i.ibb.co/V3sjKw2/packagejson.png" alt="Package.json" width="50%">

### Se crea un archivo .env para configurar la variable MONGO_URL que tendra asignado el enlace de conexion con nuestra base de datos

<img src="https://i.ibb.co/9HLs04P/env-2.png" alt=".env" width="70%">

### Se crean 5 carpetas

- src
- config
- models
- controllers
- routes

<img src="https://i.ibb.co/Lr4kDXF/carpetas.png" alt="carpetas" width="30%">

### En la carpeta src se crea el archivo index.js y se configura el servidor

<img src="https://i.ibb.co/BPVw7WN/index.png" alt="index.js" width="70%">

### La carpeta config tendra un archivo llamado db.js donde se crara la conexion con la base de datos

<img src="https://i.ibb.co/vVD0r7p/db.png" alt="db.js" width="70%">

### La carpeta models contendra el esquema que sera almacenado en la base de datos, en este caso se tienen 2 modelos:

#### Cliente.js

<img src="https://i.ibb.co/FWKvNDK/cliente.png" alt="Cliente.js" width="70%">

#### Producto.js

<img src="https://i.ibb.co/GQK7D80/producto.png" alt="Producto.js" width="70%">

### En la carpeta controllers se creanlos archivos que contendran las funciones del CRUD, un archivo asignado para cada esquema

#### ClienteController.js

<img src="https://i.ibb.co/sPnvZNw/clientecontroller.png" alt="ClienteController.js" width="70%">

#### ProductoController.js

<img src="https://i.ibb.co/bXYxgqc/productocontroller.png" alt="ProductoController.js" width="70%">

### En la carpeta routes se crean los archivos que contendran las rutas para probar las funciones en Postman

#### RoutesClientes.js

<img src="https://i.ibb.co/m4y0fjY/rutasclientes.png" alt="RutasClientes.js" width="70%">

#### RoutesProducto.js

<img src="https://i.ibb.co/0mQ1M1Q/rutasproducto.png" alt="RutasProducto.js" width="70%">

### Se crea la base de datos en Mongo DB

<img src="https://i.ibb.co/6NFZ35Q/mongo.png" alt="MongoDB" width="80%">

### Se realizan las pruebas de los metodos CRUD en Postman

### Metodo POST

![Metodo POST](https://i.ibb.co/BNvLfvq/Metodo-Post-Ejercicio.png)

### Metodo GET

![Metodo GET](https://i.ibb.co/b54t87D/Metodo-Get-Ejecicio.png)

### Metodo GET Id

![Metodo GET id](https://i.ibb.co/y5wm9DN/Metodo-Get-IDEjercicio.png)

### Metodo DELETE

![Metodo DELETE](https://i.ibb.co/M6DkBsk/Metodo-Delete-Ejercicio.png)

### Metodo PATCH

![Metodo PATCH](https://i.ibb.co/YDhbvTm/Metodo-Patch-Ejercicio.png)

## Links

- [Github @NickAndLoopVar](https://github.com/NickAndLoopVar)

- [Repositorio](https://github.com/NickAndLoopVar/backend-con-NodeJS-y-Express.js)
