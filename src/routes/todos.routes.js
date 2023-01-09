var express = require('express');
const { Op } = require("sequelize");
const Todos = require('../models/todos.models');
var router = express.Router();

router.get('/', async function(req, res) {
    try {
		const result = await Todos.findAll();
		res.status(200).json(result);
	} catch (error) {
		console.log(error);
	}
});

router.get('/title/:title', async function(req, res) {
    try{
		const {title} = req.params;
		const result = await Todos.findOne({
			where: { title: {[Op.like]: '%'+title+'%'}}  
		});
		res.status(200).json(result);
	} catch (error) {
		console.log(error);
	}
});

router.get('/:id', async function(req, res) {
    try {
		const { id } = req.params;
		const result = await Todos.findByPk(id);
		res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});


router.post('/', async function(req, res) {
    try {
        const newTodo = req.body;
        const result = await Todos.create(newTodo);
        res.status(201).json(result);
      } catch (error) {
          console.log(error);
      }
});

router.delete('/:id', async function(req, res) {
    try {
		const { id } = req.params;
		const result = await Todos.destroy({
            where: {
              id: id
            }
          });
		res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

router.put('/', async function(req, res) {
    try {
		const {isComplete, id} = req.body;
		const result = await Todos.update({ isComplete: isComplete}, {
            where: {
              id: id
            }
          });
		res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;