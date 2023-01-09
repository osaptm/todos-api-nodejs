const Address = require("../models/addresses.models");
const Categories = require("../models/categories.models");
const Todos = require("../models/todos.models");
const TodosCategories = require("../models/todos_categories.models");
const Users = require("../models/users.models");
const initModel = require("../models/initModels");
const db = require("../utils/database");

initModel();

const users = [
  { username: "Ian Rosas", email: "ian@gmail.com", password: "1234" },
  { username: "Alvis Echeverria", email: "alvis@gmail.com", password: "1234" },
  { username: "Carlos Tineo", email: "carlos@gmail.com", password: "1234" },
];

const todos = [
  {
    title: "Crear seeders",
    description: "Terminar el archivo para los seeders",
    userId: 1,
  },
  {
    title: "Pasear al perro",
    description: "Darle la vuelta por todo el barrio a firulais",
    userId: 2,
  },
  {
    title: "Tomar dos litros de agua",
    userId: 3,
  },
];

const addresses = [
  { street: "Buena Vista", number: 157, userId: 1 },
  { street: "benito Juarez", number: 57, userId: 2 },
  { street: "Madero", number: 157, userId: 3 },
];

const categories = [
  { name: "personal" }, // 1
  { name: "escuela" }, // 2
  { name: "salud" }, // 3
  { name: "trabajo" }, // 4
  { name: "hogar" }, // 5
  { name: "deporte" }, // 6
  { name: "ocio" }, // 7
  { name: "financiero" }, // 8
];

const tc = [
  { todoId: 1, categoryId: 1 },
  { todoId: 1, categoryId: 2 },
  { todoId: 1, categoryId: 4 },
  { todoId: 2, categoryId: 1 },
  { todoId: 2, categoryId: 3 },
  { todoId: 2, categoryId: 6 },
  { todoId: 2, categoryId: 7 },
  { todoId: 3, categoryId: 1 },
  { todoId: 3, categoryId: 3 },
];

db.sync({ force: true })
  .then(() => {
    console.log("Iniciando la plantación de Información");
    users.forEach((user) => Users.create(user));
    setTimeout(() => {
      addresses.forEach((address) => Address.create(address));
    }, 100);
    setTimeout(() => {
      todos.forEach((todo) => Todos.create(todo));
    }, 200);
    setTimeout(() => {
      categories.forEach((category) => Categories.create(category));
    }, 300);
    setTimeout(() => {
      tc.forEach((tc) => TodosCategories.create(tc));
    }, 1000);
  })
  .catch((error) => console.log(error));