const express = require("express");
const db = require("./utils/database");
const initModels = require("./models/initModels");
const usersRoutes = require('./routes/users.routes');
const addressesRoutes = require('./routes/addresses.routes');
const categoriesRoutes = require('./routes/categories.routes');
const todosRoutes = require('./routes/todos.routes');
const todos_categoryRoutes = require('./routes/todos_category.routes');
const PORT = 8000;

db.authenticate() // devuelve una promesa
  .then(() => console.log("Autenticación exitosa"))
  .catch((error) => console.log(error));

db.sync() // devuelve una promesa
  .then(() => console.log("Base sincronizada"))
  .catch((error) => console.log(error));

initModels();

const app = express();
app.use(express.json()); 

// EP users
app.use('/users',usersRoutes);
// EP addresses
app.use('/addresses',addressesRoutes);
// EP categories
app.use('/categories',categoriesRoutes);
// EP todos
app.use('/todos',todosRoutes);
// EP todos_category
app.use('/todos-categories',todos_categoryRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});