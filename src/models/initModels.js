const Users = require("./users.models");
const Todos = require("./todos.models");
const TodosCategories = require("./todos_categories.models");
const Categories = require("./categories.models");
const Addresses = require("./addresses.models");

const initModels = () => {
	Addresses.belongsTo(Users, {as: 'resident', foreingKey: 'user_id'});
    Users.hasOne(Addresses, {as: 'home', foreingKey: 'user_id' });
	Todos.belongsTo(Users, {as: 'author', foreingKey: 'user_id' });
    Users.hasMany(Todos, {as: 'todo' , foreingKey: 'user_id' });

    TodosCategories.belongsTo(Todos, {as: 'todo', foreingKey: 'todo_id' });
    Todos.hasMany(TodosCategories, {as: 'todo_category' , foreingKey: 'todo_id' });

    TodosCategories.belongsTo(Categories, {as: 'todo_category', foreingKey: 'category_id' });
    Categories.hasMany(TodosCategories, {as: 'category_todos' , foreingKey: 'category_id' });
};

module.exports = initModels;