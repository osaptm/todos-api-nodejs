var express = require('express');
const { Op } = require("sequelize");
const Addresses = require('../models/addresses.models');
var router = express.Router();

router.get('/', async function(req, res) {
    try {
		const result = await Addresses.findAll();
		res.status(200).json(result);
	} catch (error) {
		console.log(error);
	}
});

router.get('/street/:street', async function(req, res) {
    try{
		const {street} = req.params;
		const result = await Addresses.findOne({
			where: { street: {[Op.like]: '%'+street+'%'}}  
		});
		res.status(200).json(result);
	} catch (error) {
		console.log(error);
	}
});

router.get('/:id', async function(req, res) {
    try {
		const { id } = req.params;
		const result = await Addresses.findByPk(id);
		res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});


router.post('/', async function(req, res) {
    try {
        const newAddress = req.body;
        const result = await Addresses.create(newAddress);
        res.status(201).json(result);
      } catch (error) {
          console.log(error);
      }
});

router.delete('/:id', async function(req, res) {
    try {
		const { id } = req.params;
		const result = await Addresses.destroy({
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
		const {street, number, id} = req.body;
		const result = await Addresses.update({ street: street, number:number}, {
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