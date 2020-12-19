const express = require('express');
const router = express.Router();

const {
    list,
    showForm,
    processForm,
    del,
    showEditForm,
    processEditForm
} = require('../controllers/todo');

router
    .get('/', list)
    .get('/new', showForm)
    .post('/new', processForm)
    .post('/:todoId/delete', del)
    .get('/:todoId/edit', showEditForm)
    .post('/:todoId/edit', processEditForm)

module.exports = router;
