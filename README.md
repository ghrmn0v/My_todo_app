Todo App API endpoints
Base URL: http://localhost:3000

Register

Method: POST

URL: http://localhost:3000/register

Request Body:
{
"email": "user@example.com",
"password": "yourpassword"
}

Response:
{
"message": "Qeydiyyat uğurla tamamlandı!"
}

Login

Method: POST

URL: http://localhost:3000/login

Request Body:
{
"email": "user@example.com",
"password": "yourpassword"
}

Response:
{
"message": "Giriş uğurludur",
"token": "JWT_TOKEN_HERE"
}
(Qeyd: Token-i localStorage-də saxlayıb, növbəti Todo sorğularında Authorization header-ində Bearer formatında göndərmək lazımdır).

Get All Todos

Method: GET

URL: http://localhost:3000/todos

Headers: Authorization: Bearer

Response:
[
{
"id": 1,
"title": "Task 1",
"status": 0
},
{
"id": 2,
"title": "Task 2",
"status": 1
}
]

Create Todo

Method: POST

URL: http://localhost:3000/todos

Headers: Authorization: Bearer

Request Body:
{
"title": "New Task Description"
}

Response:
{
"message": "Tapşırıq yaradıldı",
"todo": {
"id": 3,
"title": "New Task Description",
"status": 0
}
}

Update Todo Status

Method: PUT

URL: http://localhost:3000/todos/:id

Headers: Authorization: Bearer <JWT_TOKEN_HERE>

Request Body:
{
"status": 1
}

Response:
{
"message": "Tapşırıq yeniləndi"
}

Delete Todo

Method: DELETE

URL: http://localhost:3000/todos/:id

Headers: Authorization: Bearer

Response:
{
"message": "Tapşırıq uğurla silindi"
}
