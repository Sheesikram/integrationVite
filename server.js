//const express = require('express');
import express from 'express';
const app = express();
//SyntaxError: Cannot use import statement outside a module so we need to write a type module in pakage.json

app.get('/', (req, res) => {
    res.send('Hello World');
});
app.get('/api/signup', (req, res) => {
    res.send('This is a sign up page ');
});

app.get('/api/signin', (req, res) => {
    res.send('This is a sign in page ');
});
//get a list of all products
app.get('/api/products', (req, res) => {
    const products = [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
        { id: 3, name: 'Product 3' },
        { id: 4, name: 'Product 4' },
        { id: 5, name: 'Product 5' }
    ];
    res.send(products);
    //you can use json formater to view it nicyly
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});