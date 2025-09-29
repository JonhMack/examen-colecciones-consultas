// Primero eliminar la vista si existe
db.pedidosUltimos30Dias?.drop()

// Crear la coleccion dinamica basada en los ultimos 30 dias
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
