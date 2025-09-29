**Parte III: Colecciones basadas en consultas**

Este documento contiene los scripts y pasos utilizados para crear y consultar las colecciones dinámicas de la tercera etapa del examen.


**Acceder al contenedor interactivo con mongosh**

docker exec -it examen_mongodb mongosh -u root -p example --authenticationDatabase admin


**Seleccionar la base de datos**

use examen_db


**pegar manualmente el contenido del archivo clientesVIP.js dentro de mongosh:**

db.createView(
  "clientesVIP",
  "clientes",
  [
    {
      $project: {
        nombre: 1,
        compras: 1,
        promedioCompras: { $avg: "$compras" }
      }
    },
    {
      $match: { promedioCompras: { $gt: 500 } }
    }
  ]
);


****pegar manualmente el contenido del archivo pedidosActivos.js dentro de mongosh:**

// Coleccion dinamica: pedidosActivos
db.createView(
  "pedidosActivos",       // nombre de la vista/coleccion
  "pedidos",              // coleccion base
  [
    {
      $match: {
        estado: { $in: ["pendiente", "enviado"] }
      }
    }
  ]
);


**Verificar que las colecciones se crearon**

show collections
db.clientesVIP.find().pretty()
db.pedidosActivos.find().pretty()

