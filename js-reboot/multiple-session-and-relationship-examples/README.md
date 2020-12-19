
# `user-hasmany-todos`: Simple foreign key


Shows how a logged-in user can create and retrieve content (todos)


## `update-delete`: user can update and delete todos


- same relationship, but now adds controllers/templates for:
  - GET `/todos/:id/edit` - shows the form, with existing data
  - POST `/todos/:id/edit` - receives form data, calls `Todo.update()`
  - POST `/todos/:id/delete` - deletes todo
  
If we were building an API, these would be condensed into:

- PUT `/todos/:id/edit` - receives form data, calls `Todo.update()`
- DELETE `/todos/:id/delete` - deletes todo

The reasons are:

- HTML forms can only send GET and POST
- API clients can send GET, POST, PUT, DELETE (and others)

