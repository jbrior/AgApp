const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express();

app.use(express.static('public/'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/products', productRoute);

app.get('/', (req, res) => {
    res.status(200).send("Hello from Node API Server");
});

mongoose.connect("mongodb+srv://admin:Spokeaz1354$@backenddb.xzdgmke.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("Connected to database!");
    app.listen(process.env.PORT || 3000, () => {
        console.log("Server is running on port 3000");
    });
})
.catch(() => {
    console.log("Connection failed!");
});