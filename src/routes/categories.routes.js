var express = require('express');
const { Op } = require("sequelize");
const Categories = require('../models/categories.models');
var router = express.Router();

router.get('/', async function(req, res) {
    try {
		const result = await Categories.findAll();
		res.status(200).json(result);
	} catch (error) {
		console.log(error);
	}
});

router.get('/name/:name', async function(req, res) {
    try{
		const {name} = req.params;
		const result = await Categories.findOne({
			where: { name: {[Op.like]: '%'+name+'%'}}  
		});
		res.status(200).json(result);
	} catch (error) {
		console.log(error);
	}
});

router.get('/:id', async function(req, res) {
    try {
		const { id } = req.params;
		const result = await Categories.findByPk(id);
		res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});


router.post('/', async function(req, res) {
    try {
        const newCategory = req.body;
        const result = await Categories.create(newCategory);
        res.status(201).json(result);
      } catch (error) {
          console.log(error);
      }
});

router.delete('/:id', async function(req, res) {
    try {
		const { id } = req.params;
		const result = await Categories.destroy({
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
		const {name, id} = req.body;
		const result = await Categories.update({  name:name}, {
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