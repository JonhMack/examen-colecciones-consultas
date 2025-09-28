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

// Consultar documentos en la colección clientes
db.clientes.find().pretty()