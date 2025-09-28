// Base de datos
db = db.getSiblingDB("examen_db");

// Colección de clientes
db.clientes.insertMany([
  { nombre: "Isaias Marroquin", pais: "México", edad: 30, compras: [200, 300, 150] },
  { nombre: "Ana López", pais: "Guatemala", edad: 22, compras: [500, 400] },
  { nombre: "Carlos Ruiz", pais: "México", edad: 40, compras: [1000, 700, 600] },
  { nombre: "María García", pais: "España", edad: 28, compras: [300, 200, 100] },
  { nombre: "Luis Fernández", pais: "México", edad: 26, compras: [450, 300] },
  { nombre: "Sofía Méndez", pais: "Argentina", edad: 35, compras: [250, 300] },
  { nombre: "Jorge Castillo", pais: "México", edad: 45, compras: [800, 900, 1000] },
  { nombre: "Lucía Torres", pais: "Chile", edad: 29, compras: [150, 200, 250] },
  { nombre: "Pedro Sánchez", pais: "España", edad: 50, compras: [400, 500] },
  { nombre: "Camila Rivas", pais: "Colombia", edad: 33, compras: [600, 700] },
  { nombre: "Andrés Gómez", pais: "México", edad: 38, compras: [300, 350, 400] },
  { nombre: "Valentina Cruz", pais: "Guatemala", edad: 27, compras: [100, 150] },
  { nombre: "Mateo Herrera", pais: "Perú", edad: 41, compras: [900, 950] },
  { nombre: "Elena Navarro", pais: "España", edad: 24, compras: [200, 300, 400] },
  { nombre: "Diego Morales", pais: "México", edad: 36, compras: [500, 600] },
  { nombre: "Laura Jiménez", pais: "Costa Rica", edad: 31, compras: [350, 450] },
  { nombre: "Tomás Aguilar", pais: "México", edad: 39, compras: [700, 800] },
  { nombre: "Natalia Vargas", pais: "Guatemala", edad: 23, compras: [120, 180] },
  { nombre: "Fernando Paredes", pais: "Chile", edad: 44, compras: [1000, 1100] },
  { nombre: "Paula Cordero", pais: "México", edad: 32, compras: [250, 300, 350] }
]);

// Colección de pedidos
db.pedidos.insertMany([
  { cliente: "Isaias Marroquin", fecha: new Date("2025-09-01"), estado: "activo", total: 200 },
  { cliente: "Ana López", fecha: new Date("2025-08-15"), estado: "cancelado", total: 500 },
  { cliente: "Carlos Ruiz", fecha: new Date("2025-09-10"), estado: "activo", total: 1000 },
  { cliente: "María García", fecha: new Date("2025-07-20"), estado: "activo", total: 300 },
  { cliente: "Luis Fernández", fecha: new Date("2025-09-05"), estado: "activo", total: 450 },
  { cliente: "Sofía Méndez", fecha: new Date("2025-09-12"), estado: "activo", total: 250 },
  { cliente: "Jorge Castillo", fecha: new Date("2025-09-15"), estado: "activo", total: 800 },
  { cliente: "Lucía Torres", fecha: new Date("2025-08-30"), estado: "cancelado", total: 150 },
  { cliente: "Pedro Sánchez", fecha: new Date("2025-09-18"), estado: "activo", total: 400 },
  { cliente: "Camila Rivas", fecha: new Date("2025-09-20"), estado: "activo", total: 600 },
  { cliente: "Andrés Gómez", fecha: new Date("2025-09-22"), estado: "cancelado", total: 300 },
  { cliente: "Valentina Cruz", fecha: new Date("2025-09-25"), estado: "activo", total: 100 },
  { cliente: "Mateo Herrera", fecha: new Date("2025-09-26"), estado: "activo", total: 900 },
  { cliente: "Elena Navarro", fecha: new Date("2025-08-10"), estado: "activo", total: 200 },
  { cliente: "Diego Morales", fecha: new Date("2025-09-03"), estado: "cancelado", total: 500 },
  { cliente: "Laura Jiménez", fecha: new Date("2025-09-07"), estado: "activo", total: 350 },
  { cliente: "Tomás Aguilar", fecha: new Date("2025-09-09"), estado: "activo", total: 700 },
  { cliente: "Natalia Vargas", fecha: new Date("2025-08-25"), estado: "cancelado", total: 120 },
  { cliente: "Fernando Paredes", fecha: new Date("2025-09-11"), estado: "activo", total: 1000 },
  { cliente: "Paula Cordero", fecha: new Date("2025-09-13"), estado: "activo", total: 250 }
]);

