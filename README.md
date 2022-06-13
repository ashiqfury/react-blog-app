# Blog Application

A blog application using react as frontend, node as backend and mongo as database.
A blog (a shortened version of “weblog”) is an online journal or informational
website displaying information in reverse chronological order, with
the latest posts appearing first, at the top. It is a platform where
a writer or a group of writers share their views on an individual subject.

## API Reference

#### Get all users

```http
  GET /api/users/
```

| Parameter | Type     | Description                                |
| :-------- | :------- | :----------------------------------------- |
| `null`    | `string` | **Not Required**. No parameter is required |

#### Get a particular user

```http
  GET /api/users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to fetch |

#### Get all posts

```http
  GET /api/posts/
```

| Parameter | Type     | Description                                |
| :-------- | :------- | :----------------------------------------- |
| `null`    | `string` | **Not Required**. No parameter is required |

#### Get a particular post

```http
  GET /api/posts/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of post to fetch |

#### Get all comments

```http
  GET /api/comments/
```

| Parameter | Type     | Description                                |
| :-------- | :------- | :----------------------------------------- |
| `null`    | `string` | **Not Required**. No parameter is required |

#### Get all comments of particular post

```http
  GET /api/comments/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of post to fetch |

#### Get all categories

```http
  GET /api/categories/
```

| Parameter | Type     | Description                                |
| :-------- | :------- | :----------------------------------------- |
| `null`    | `string` | **Not Required**. No parameter is required |

## Authors

- [@ashiqfury](https://www.github.com/ashiqfury)

## Badges

![furyblogz.](https://img.shields.io/badge/furyblogz.-v1.0.0-orange)

![licence](https://img.shields.io/badge/licence-ISC-blue)

![dependencies](https://img.shields.io/badge/dependencies-up%20to%20date-green)

![total lines](https://img.shields.io/badge/total%20lines-6k-yellow)

![repo size](https://img.shields.io/badge/repo%20size-40%20MB-brightgreen)

![total commits](https://img.shields.io/badge/total%20commits-120-yellowgreen)

![total packages](https://img.shields.io/badge/total%20packages-12-red)

## Color Reference

| Color                                                    | Name             | Hex     | RGBA                    |
| -------------------------------------------------------- | ---------------- | ------- | ----------------------- |
| ![#00b3d6](https://via.placeholder.com/10/00b3d6?text=+) | cerulean-crayola | #00b3d6 | hsla(190, 100%, 42%, 1) |

## Demo

Insert gif or link to demo

[furyblogz. : https://furyblogz.herokuapp.com](https://furyblogz.herokuapp.com) Live Application In Under Maintenance!

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

- Create a `.env` file in `client` folder and type the following environment variables.
- Go to [emailjs](https://www.emailjs.com/), create a account and checkout our documentation to get these three variables.

**Service Id**: `REACT_APP_SERVICEID`

**Template Id**: `REACT_APP_TEMPLATEID`

**User Id**: `REACT_APP_USERID`

- Create a `.env` file in `api` folder and type the following environment variables.

**MONGO_DB**: `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.mfyow.mongodb.net/${database_name}?retryWrites=true&w=majority`

**Port**: `2506`

# Hi, I'm Ashiq! 👋

## 🚀 About Me

I'm Ashiq, full stack developer who builds dream projects
with react and node especially MERN stack. Really passionate in programming
and making projects with lots of love and dedication. I started creating
application since June 2020. I have 2+ years of experience in MERN stack.
I also curious in blockchain, web3.0, mobile application development so I
started learning flutter as my hobby.

I am also love reading books especially non-fiction such as psychology,
philosophy, finance, self-development and relationship.

## 🔗 Links

[![portfolio](https://img.shields.io/badge/instagram-000?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/_a.s.h.i.q__f.u.r.y_/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/ashiqfury)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/ashiqfury)

## 🛠 Skills

Javascript, HTML, CSS, React, Nextjs, Redux, Node,
Express, MongoDB, MySQL, SQL Server, Linux,
TailwindCss, Bootstrap, Material UI, Sass, Gsap,
Dart, Flutter, Django, Git, JWT, Firebase

## Installation

#### **Step 1: Download the project**

#### Download application with git.

- Open the terminal and run the following command line

```git
git clone https://github.com/ashiqfury/react-blog-app.git
cd react-blog-app
```

#### Download application without git.

- Open the project in my github profile - [furyblogz.](https://github.com/ashiqfury/react-blog-app/)
- Click the `code` button and click the Download Zip button.
- Exract the zip file and paste the following command line.

```bash
cd react-blog-app
```

#### **Step 2: Installing dependencies**

#### Installing dependencies using `npm`

- Open project folder in two different terminal and
  paste the command lines
- For installing client dependencies

#### Installing dependencies using `npm`

```npm
cd client
npm install
```

```npm
cd api
npm install
```

#### Installing dependencies using `yarn`

```yarn
cd client
yarn
```

```yarn
cd api
yarn
```

#### **Step 3: Starting application**

- Paste the following code in both terminals.

#### Starting application using `npm`

```npm
npm start
```

#### Starting application using `yarn`

```npm
yarn start
```

Your application starts running in [`localhost:3000`](http://localhost:3000/)

## Tech Stack

**Client:** React, Redux, Sass, Gsap, EmailJs, Axios, Formik, Html2Canvas, React-Confirm-Alert,
React-Hot-Toast, React-Router

**Server:** Node, Express, MongoDB, Mongoose, Bcrypt, Cors, Helmet, Dotenv, Nodemon, Multer

## Run Locally

Clone the project

```bash
  git clone https://github.com/ashiqfury/react-blog-app.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  cd client
  npm install
  cd ../api
  npm install
```

Start the server

```bash
  npm run start
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

MIT License

Copyright (c) [year] [fullname]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
