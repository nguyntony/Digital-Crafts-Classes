
# Finishing CRUD

## Adding a delete button

- Routing: add a POST route `/todos/:todoId/delete`
- Controller: add a function that calls `Todo.delete({where: { id: todoId }})`
- Template: modify the listing template
  - include a POST form with an `action` attribute that goes to `/todos/${t.id}/delete`

## Updating a Todo

### Showing the form

- Routing: add a GET route `/todos/:todoId/edit`
- Template: modify the listing template
  - Add an `<a href="/todos/${t.id}">Edit</a>`
- Template: modify the form
  - add an `action` attribute that goes to `/todos/${todo.id}/edit`
- Controller: populate the form
  - add an `edit()` router handler function that:
    - `Todo.findByPk()` to get the specific todo
    - `res.render()` with the values from the database

### Process the form

- Routing: add a POST route `/todos/:todoId/edit`
- Controller: Call `Todo.update()` using the values from `req.body`
