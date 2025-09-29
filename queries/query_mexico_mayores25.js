// Query: Obtener todos los clientes de México con edad mayor a 25
db.clientes.find(
  { pais: "México", edad: { $gt: 25 } }
).pretty();
