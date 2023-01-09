var express = require('express');
const { Op } = require("sequelize");
const TodosCategories = require('../models/todos_categories.models');
var router = express.Router();

router.get('/', async function(req, res) {
    try {
		const result = await TodosCategories.findAll();
		res.status(200).json(result);
	} catch (error) {
		console.log(error);
	}
});


router.get('/:id', async function(req, res) {
    try {
		const { id } = req.params;
		const result = await TodosCategories.findByPk(id);
		res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});


router.post('/', async function(req, res) {
    try {
        const newTodoCat = req.body;
        const result = await TodosCategories.create(newTodoCat);
        res.status(201).json(result);
      } catch (error) {
          console.log(error);
      }
});

router.delete('/:id', async function(req, res) {
    try {
		const { id } = req.params;
		const result = await TodosCategories.destroy({
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