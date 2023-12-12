const express = require('express');
const AuthorController = require('../controller/AuthorController');
const route = express.Router();
route
    .post('/', AuthorController.create)
    .get('/', AuthorController.getAll)
    .get('/:id', AuthorController.getAuthor)
module.exports = route;