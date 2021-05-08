const articles = require('../src/articles.json');
const comments = require('../src/comments.json');
const users = require('../src/users.json');

// Require packages and set the port
const express = require('express');
const app = express();
const port = 3001;

// Use Node.js body parsing middleware
app.use((request, response, next) => {
    console.log(request.headers)
    next()
});

app.use((request, response, next) => {
    request.chance = Math.random()
    next()
});

app.get('/articles', (request, response) => {
    response.set("Content-type", "application/json");
    response.set("Access-Control-Allow-Origin", "*");
    response.json(articles)
});

app.get('/articles/:id/comments', (request, response) => {
    response.set("Content-type", "application/json");
    response.set("Access-Control-Allow-Origin", "*");
    response.json(comments.filter((comment) => +request.params.id === comment.articleId))
});

app.get('/users/:id', (request, response) => {
    response.set("Content-type", "application/json");
    response.set("Access-Control-Allow-Origin", "*");
    response.json(users.find((user) => +request.params.id === user.id)) 
});

app.get('/users', (request, response) => {
    response.set("Content-type", "application/json");
    response.set("Access-Control-Allow-Origin", "*");
    response.json(users) 
});

// Start the server
app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})