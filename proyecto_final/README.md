**Parte IV – Caso Integrador**

Este documento contiene los pasos y comandos utilizados para ejecutar las consultas de la cuarta etapa del examen.


**Acceder al contenedor de MongoDB:**

docker exec -it examen_mongodb mongosh -u root -p example --authenticationDatabase admin


**Comandos dentro de mongosh:**

**Seleccionar la base de datos:**

use examen_db


**Eliminar la vista si ya existía:**

if (db.getCollectionNames().includes("pedidosUltimos30Dias")) {
    db.pedidosUltimos30Dias.drop()
}


**Crear la vista dinámica de pedidos de los últimos 30 días:**

db.createView(
  "pedidosUltimos30Dias",
  "pedidos",
  [
    {
      $match: {
        fecha: { $gte: new Date(new Date().setDate(new Date().getDate() - 30)) }
      }
    }
  ]
)


**Crear índices recomendados para optimizar las búsquedas por fecha y estado:**

db.pedidos.createIndex({ fecha: 1 })
db.pedidos.createIndex({ estado: 1 })


**Verificar que la vista funciona:**

db.pedidosUltimos30Dias.find().pretty()