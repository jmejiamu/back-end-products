const express = require('express');
const knex = require('knex');
const cors = require('cors');
const dotenv = require('dotenv');


// Config ENV 
dotenv.config()

const app = express();
app.use(cors());

// Import routes
const getProductsData = require('./routes/get')
const getSingleProductsData = require('./routes/get')
const upadateLikes = require('./routes/update')


// Config DB connection
const db = knex({
    client: 'pg',
    connection: {
        host: process.env.HOSTNAME,
        user: process.env.USERNAMEPG,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
    }
});

app.get('/products', (req, res) => {
    getProductsData.showProducts(req, res, db)
})

app.put('/updatelikes/:item_id', (req, res) => {
    upadateLikes.updateLike(req, res, db);
})

app.get('/aproduct/:item_id', (req, res) => {
    getSingleProductsData.showSingleProduct(req, res, db)

})




app.listen(3001, process.env.URL, () => {
    console.log('>> App is running');
})