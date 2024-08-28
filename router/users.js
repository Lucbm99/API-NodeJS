const express = require('express');
const router = express.Router();
const User = require('../models/users');

router.get('/', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

router.post('/', async (req, res) => {
    const user = req.body;
    const result = await User.create(user);
    res.json(result);
});

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const user = req.body;
    const result = await User.update(user, { where: { id: id} });
    res.json(result);
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const result = await User.destroy({ where: { id: id} });
    res.json(result);
});

module.exports = router;