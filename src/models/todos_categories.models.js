const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const Todos = require("./todos.models");
const Categories = require("./categories.models");

const TodosCategories = db.define("todos_categories", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Categories,
      key: "id",
  },
    field: "category_id"
  },
  todoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Todos,
      key: "id",
  },
    field: "todo_id"
  }
},{
  timestamps: false,
});

module.exports = TodosCategories;