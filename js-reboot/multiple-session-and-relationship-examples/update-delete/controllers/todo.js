const { layout } = require('../utils')
const { Todo } = require('../models');

const showForm = (req, res) => {
    res.render('todos/form', {
        locals: {
            title: 'Add new post'
        },
        ...layout
    });
};

const processForm = async (req, res) => {
    const { title } = req.body;
    const { id } = req.session.user;
    
    if (title && id) {
        const newTodo = await Todo.create({
            title,
            isComplete: false,
            userId: id
        });
        console.log(newTodo);
        res.redirect(`${req.baseUrl}/`)
    } else {
        res.redirect(req.url);
    }
    
};

const list = async (req, res) => {
    const { id } = req.session.user;
    if (id) {
        // Show this user's Todos
        const todos = await Todo.findAll({
            where: {
                userId: id
            }
        });
        res.render('todos/list', {
            locals: {
                todos
            },
            ...layout
        })
    } else {
        // redirect
        res.redirect('/');
    }
};

const del = async (req, res) => {
    const { id } = req.session.user;
    const { todoId } = req.params;
    if (id && todoId) {
        const todo = await Todo.destroy({
            where: {
                id: todoId
            }
        });
        console.log(`You deleted Todo with id ${todoId}`);
        res.redirect('/todos');
    } else {
        res.redirect('/');
    }
};

const showEditForm = async (req, res) => {
    const { id } = req.session.user;
    const { todoId } = req.params;
    if (id && todoId) {
        const todo = await Todo.findOne({
            where: {
                id: todoId
            }
        });
        console.log(`You want to edit Todo with id ${todoId}`);
        res.render('todos/edit', {
            locals: {
                todo
            },
            ...layout
        })
    } else {
        res.redirect('/');
    }
    
};

const processEditForm = async (req, res) => {
    const { id } = req.session.user;
    const { todoId } = req.params;
    const { title } = req.body;
    
    if (id && todoId) {
        const todo = await Todo.update({
            title
        }, {
            where: {
                id: todoId
            }
        });
        console.log(`You updated Todo with id ${todoId}`);
        res.redirect('/todos');
    } else {
        res.redirect('/');
    }
};


module.exports = {
    showForm,
    processForm,
    list,
    del,
    showEditForm,
    processEditForm,
};
