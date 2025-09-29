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
