# Twittle

A NoSQL social networking API

## Description

Twittle is an API aimed for use in social networking applications, allowing developers to store and retrieve data typical of social media networks including user data, posts, reactions, and friends lists. The API utilizes a MongoDB database and the Mongoose ODM, as well as the Express.js package for routing.


## Getting Started

1. Ensure that you have MongoDB installed on your machine (if you don't, follow the instructions on the [MongoDB Website](https://docs.mongodb.com/manual/installation/))
2. Clone the repo
3. Install dependencies with `npm -i`
4. Run `npm start` to run the server
5. Use your browser or an app like [Insomnia](https://insomnia.rest/) to test the REST API.

### Dependencies

* Mongoose
* Moment.js
* Express.js
* Nodemon (optional)


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


## License

