<<<<<<< HEAD
=======
<<<<<<< HEAD
1. **Levantar contenedor de MongoDB**

# Descargar e iniciar un contenedor de MongoDB con usuario root
docker run -d --name examen_mongodb -p 27017:27017 \
  -e MONGO_INITDB_ROOT_USERNAME=root \
  -e MONGO_INITDB_ROOT_PASSWORD=example \
  mongo:6.0


2. **Acceder al contenedor con mongosh**

# Entrar al contenedor y abrir mongosh con credenciales de root

docker exec -it examen_mongodb mongosh -u root -p example --authenticationDatabase admin


3. **Comandos ejecutados dentro de MongoDB**

// Cambiar a la base de datos examen_db

use examen_db


// Ver colecciones disponibles

show collections

clientes

pedidos


// Consultar documentos en la colección clientes

db.clientes.find().pretty()

[
  {
    _id: ObjectId('68d9992edaeaa8052cce5f47'),
    nombre: 'Isaias Marroquin',
    pais: 'México',
    edad: 30,
    compras: [ 200, 300, 150 ]
  },
  {
    _id: ObjectId('68d9992edaeaa8052cce5f48'),
    nombre: 'Ana López',
    pais: 'Guatemala',
    edad: 22,
    compras: [ 500, 400 ]
  },
  {
    _id: ObjectId('68d9992edaeaa8052cce5f49'),
    nombre: 'Carlos Ruiz',
    pais: 'México',
    edad: 40,
    compras: [ 1000, 700, 600 ]
  },
  {
    _id: ObjectId('68d9992edaeaa8052cce5f4a'),
    nombre: 'María García',
    pais: 'España',
    edad: 28,
    compras: [ 300, 200, 100 ]
  },
  {
    _id: ObjectId('68d9992edaeaa8052cce5f4b'),
    nombre: 'Luis Fernández',
    pais: 'México',
    edad: 26,
    compras: [ 450, 300 ]
  },
  {
    _id: ObjectId('68d9992edaeaa8052cce5f4c'),
    nombre: 'Sofía Méndez',
    pais: 'Argentina',
    edad: 35,
    compras: [ 250, 300 ]
  },
  {
    _id: ObjectId('68d9992edaeaa8052cce5f4d'),
    nombre: 'Jorge Castillo',
    pais: 'México',
    edad: 45,
    compras: [ 800, 900, 1000 ]
  },
  {
    _id: ObjectId('68d9992edaeaa8052cce5f4e'),
    nombre: 'Lucía Torres',
    pais: 'Chile',
    edad: 29,
    compras: [ 150, 200, 250 ]
  },
  {
    _id: ObjectId('68d9992edaeaa8052cce5f4f'),
    nombre: 'Pedro Sánchez',
    pais: 'España',
    edad: 50,
    compras: [ 400, 500 ]
  },
  {
    _id: ObjectId('68d9992edaeaa8052cce5f50'),
    nombre: 'Camila Rivas',
    pais: 'Colombia',
    edad: 33,
    compras: [ 600, 700 ]
  },
  {
    _id: ObjectId('68d9992edaeaa8052cce5f51'),
    nombre: 'Andrés Gómez',
    pais: 'México',
    edad: 38,
    compras: [ 300, 350, 400 ]
  },
  {
    _id: ObjectId('68d9992edaeaa8052cce5f52'),
    nombre: 'Valentina Cruz',
    pais: 'Guatemala',
    edad: 27,
    compras: [ 100, 150 ]
  },
  {
    _id: ObjectId('68d9992edaeaa8052cce5f53'),
    nombre: 'Mateo Herrera',
    pais: 'Perú',
    edad: 41,
    compras: [ 900, 950 ]
  },
  {
    _id: ObjectId('68d9992edaeaa8052cce5f54'),
    nombre: 'Elena Navarro',
    pais: 'España',
    edad: 24,
    compras: [ 200, 300, 400 ]
  },
  {
    _id: ObjectId('68d9992edaeaa8052cce5f55'),
    nombre: 'Diego Morales',
    pais: 'México',
    edad: 36,
    compras: [ 500, 600 ]
  },
  {
    _id: ObjectId('68d9992edaeaa8052cce5f56'),
    nombre: 'Laura Jiménez',
    pais: 'Costa Rica',
    edad: 31,
    compras: [ 350, 450 ]
  },
  {
    _id: ObjectId('68d9992edaeaa8052cce5f57'),
    nombre: 'Tomás Aguilar',
    pais: 'México',
    edad: 39,
    compras: [ 700, 800 ]
  },
  {
    _id: ObjectId('68d9992edaeaa8052cce5f58'),
    nombre: 'Natalia Vargas',
    pais: 'Guatemala',
    edad: 23,
    compras: [ 120, 180 ]
  },
  {
    _id: ObjectId('68d9992edaeaa8052cce5f59'),
    nombre: 'Fernando Paredes',
    pais: 'Chile',
    edad: 44,
    compras: [ 1000, 1100 ]
  },
  {
    _id: ObjectId('68d9992edaeaa8052cce5f5a'),
    nombre: 'Paula Cordero',
    pais: 'México',
    edad: 32,
    compras: [ 250, 300, 350 ]
  }
]

// Consultar documentos en la colección pedidos
 
 db.pedidos.find().pretty()

 [
  {
    _id: ObjectId('68d9992edaeaa8052cce5f5b'),
    cliente: 'Isaias Marroquin',
    fecha: ISODate('2025-09-01T00:00:00.000Z'),
    estado: 'activo',
    total: 200
  },
  {
    _id: ObjectId('68d9992edaeaa8052cce5f5c'),
    cliente: 'Ana López',
    fecha: ISODate('2025-08-15T00:00:00.000Z'),
    estado: 'cancelado',
    total: 500
  },
  {
    _id: ObjectId('68d9992edaeaa8052cce5f5d'),
    cliente: 'Carlos Ruiz',
    fecha: ISODate('2025-09-10T00:00:00.000Z'),
    estado: 'activo',
    total: 1000
  },
  {
    _id: ObjectId('68d9992edaeaa8052cce5f5e'),
    cliente: 'María García',
    fecha: ISODate('2025-07-20T00:00:00.000Z'),
    estado: 'activo',
    total: 300
  },
  {
    _id: ObjectId('68d9992edaeaa8052cce5f5f'),
    cliente: 'Luis Fernández',
    fecha: ISODate('2025-09-05T00:00:00.000Z'),
    estado: 'activo',
    total: 450
  },
  {
    _id: ObjectId('68d9992edaeaa8052cce5f60'),
    cliente: 'Sofía Méndez',
    fecha: ISODate('2025-09-12T00:00:00.000Z'),
    estado: 'activo',
    total: 250
  },
  {
    _id: ObjectId('68d9992edaeaa8052cce5f61'),
    cliente: 'Jorge Castillo',
    fecha: ISODate('2025-09-15T00:00:00.000Z'),
    estado: 'activo',
    total: 800
  },
  {
    _id: ObjectId('68d9992edaeaa8052cce5f62'),
    cliente: 'Lucía Torres',
    fecha: ISODate('2025-08-30T00:00:00.000Z'),
    estado: 'cancelado',
    total: 150
  },
  {
    _id: ObjectId('68d9992edaeaa8052cce5f63'),
    cliente: 'Pedro Sánchez',
    fecha: ISODate('2025-09-18T00:00:00.000Z'),
    estado: 'activo',
    total: 400
  },
  {
    _id: ObjectId('68d9992edaeaa8052cce5f64'),
    cliente: 'Camila Rivas',
    fecha: ISODate('2025-09-20T00:00:00.000Z'),
    estado: 'activo',
    total: 600
  },
  {
    _id: ObjectId('68d9992edaeaa8052cce5f65'),
    cliente: 'Andrés Gómez',
    fecha: ISODate('2025-09-22T00:00:00.000Z'),
    estado: 'cancelado',
    total: 300
  },
  {
    _id: ObjectId('68d9992edaeaa8052cce5f66'),
    cliente: 'Valentina Cruz',
    fecha: ISODate('2025-09-25T00:00:00.000Z'),
    estado: 'activo',
    total: 100
  },
  {
    _id: ObjectId('68d9992edaeaa8052cce5f67'),
    cliente: 'Mateo Herrera',
    fecha: ISODate('2025-09-26T00:00:00.000Z'),
    estado: 'activo',
    total: 900
  },
  {
    _id: ObjectId('68d9992edaeaa8052cce5f68'),
    cliente: 'Elena Navarro',
    fecha: ISODate('2025-08-10T00:00:00.000Z'),
    estado: 'activo',
    total: 200
  },
  {
    _id: ObjectId('68d9992edaeaa8052cce5f69'),
    cliente: 'Diego Morales',
    fecha: ISODate('2025-09-03T00:00:00.000Z'),
    estado: 'cancelado',
    total: 500
  },
  {
    _id: ObjectId('68d9992edaeaa8052cce5f6a'),
    cliente: 'Laura Jiménez',
    fecha: ISODate('2025-09-07T00:00:00.000Z'),
    estado: 'activo',
    total: 350
  },
  {
    _id: ObjectId('68d9992edaeaa8052cce5f6b'),
    cliente: 'Tomás Aguilar',
    fecha: ISODate('2025-09-09T00:00:00.000Z'),
    estado: 'activo',
    total: 700
  },
  {
    _id: ObjectId('68d9992edaeaa8052cce5f6c'),
    cliente: 'Natalia Vargas',
    fecha: ISODate('2025-08-25T00:00:00.000Z'),
    estado: 'cancelado',
    total: 120
  },
  {
    _id: ObjectId('68d9992edaeaa8052cce5f6d'),
    cliente: 'Fernando Paredes',
    fecha: ISODate('2025-09-11T00:00:00.000Z'),
    estado: 'activo',
    total: 1000
  },
  {
    _id: ObjectId('68d9992edaeaa8052cce5f6e'),
    cliente: 'Paula Cordero',
    fecha: ISODate('2025-09-13T00:00:00.000Z'),
    estado: 'activo',
    total: 250
  }
]
