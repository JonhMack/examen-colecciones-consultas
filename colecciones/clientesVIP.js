// Coleccion dinamica: clientesVIP
db.createView(
  "clientesVIP",          // nombre de la vista/coleccion
  "clientes",             // coleccion base
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

