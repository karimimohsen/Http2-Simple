/*jshint esversion: 6 */

// const spdy = require('spdy');
const http = require('http');
const express = require('express');
const fs = require('mz/fs');

const app = express();

app.use(express.static('public'));

app.get('/home', (req, res) => {
    fs.readFile('home.html')
        .then(file => {
            res.writeHead(200);
            res.end(file);
        })
        .catch(error => res.status(500).send(error.toString()));
});

http.createServer(app)
    .listen(8001, (err) => {
        if (err) {
            throw new Error(err);
        }
        console.log('Listening on port:  8001.');
    });