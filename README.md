# Twittle
>### Module 18 UNC Coding Bootcamp Challenge - A NoSQL social networking API <br><br>
>  Twittle is an API aimed for use in social networking applications, allowing developers to store and retrieve data typical of social media networks including user data, posts, reactions, and friends lists. The API utilizes a MongoDB database and the Mongoose ODM, as well as the Express.js package for routing. <br><br>

![JavaScript][js-url]
![Node][node-url]
![Mongo][mongo-url]
![Express][express-url]

## Installation

Clone the repository:

```sh
git clone git@github.com:t-starkw/twittle.git
```

Install the required dependencies:

```sh
npm install
```

Run the project in your local browser:

```sh
npm start
```


## Usage

Use your browser or an app like [Insomnia](https://insomnia.rest/) to test the REST API.

## Endpoints

**User**
- Get all users:        `GET /api/users`
- Create a user:        `POST /api/users`
- Get user by ID:       `GET /api/users/:userId'
- Update a user:        `PUT /api/users/:userId'
- Delete a user:        `DELETE /api/users/:userId'
- Add a friend:         `PUT /api/users/:userId/friends/:friendId`
- Delete a friend:      `DELETE /api/users/:userId/friends/:friendId`

**Thought**
- Get all thoughts:     `GET /api/thoughts`
- Create a thought:     `POST /api/thoughts`
- Get thought by ID:    `GET /api/thoughts/:thoughtId'
- Update a thought:     `PUT /api/thoughts/:thoughtId'
- Delete a thought:     `DELETE /api/thoughts/:thoughtId'

**Reaction**
- Add a reaction:       `PUT /api/thoughts/:id/reactions`
- Delete a reaction:    `DELETE /api/thoughts/:id/reactions`

## Meta

Tessa Starkweather – [LinkedIn](https://www.linkedin.com/in/tessa-starkweather-b61941200/) – tess.starkweather@gmail.com

View my profile – [GitHub](https://github.com/t-starkw)

Distributed under the MIT license. See ``LICENSE`` for more information.

## Contributing

1. Fork it (<https://github.com/t-starkw/twittle/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->

[node-url]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[js-url]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[html-url]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[css-url]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[python-url]: https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white
[express-url]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[react-url]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[jquery-url]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[bs-url]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[tw-url]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[mongo-url]: https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[mysql-url]: https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white
[heroku-url]: https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white
[sqlize-url]: https://img.shields.io/badge/sequelize-323330?style=for-the-badge&logo=sequelize&logoColor=blue
[jswtoken-url]: 	https://img.shields.io/badge/json%20web%20tokens-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink
[apollo-url]: https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql
[graphql-url]: https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white

