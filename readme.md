# Workflow

## Features

| Feature | Method | URL |
| :------ | :----: | :-- |


<!-- todo REMOVE THIS FEATURE LATER -->

| List Users | GET | /api/auth/users |

| Register User | POST | /api/auth/register |

| Login User | POST | /api/auth/login |

| Edit User | PUT | /api/user/:user |

| Users comments | GET | /api/user/:user |

| Comment by id | GET | /api/comments/:id |

| Post comments | GET | /api/post/:post |

## Register

-First Name \*not required yet

-Last Name \*not required yet

-Email \*not required yet

-Username \*required

-Password \*required

## Login

-Username \*required

-Password \*required

## User Edit

-body will contain any updates wanted to user, send with token

## Comments

Get comments by user

Get comments by comment ID

Get comments by parent (post/comment)
