// Query: Proyectar el nombre y el promedio de compras
db.clientes.aggregate([
  {
    $project: {
      nombre: 1,
      promedio_compras: { $avg: "$compras" }
    }
  }
]);
