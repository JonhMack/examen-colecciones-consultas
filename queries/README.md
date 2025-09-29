**Parte II – Consultas Básicas**

Este documento contiene los pasos y comandos utilizados para ejecutar las consultas de la segunda etapa del examen.


**Acceder al contenedor de MongoDB:** 

docker exec -it examen_mongodb mongosh -u root -p example --authenticationDatabase admin
Current Mongosh Log ID: 68d9bed3dea73bc780ce5f46


**Seleccionar la base de datos:**

use examenDB


**Consultas**

**Obtener todos los clientes de México con edad mayor a 25:**

db.clientes.find(
  { pais: "México", edad: { $gt: 25 } }
).pretty();


**Para ejecutar desde el host:**

mongosh examenDB < queries/query_mexico_mayores25.js


**Proyectar el nombre y el promedio de compras:**

db.clientes.aggregate([
  {
    $project: {
      nombre: 1,
      promedioCompras: { $avg: "$compras" }
    }
  }
]);


**Para ejecutar desde el host:**

mongosh examenDB < queries/query_promedio_compras.js









