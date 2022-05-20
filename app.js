const express = require('express');
const dotenv = require('dotenv');
const mongo = require('./shared');
const getRouter = require('./Router/hallbooking')


dotenv.config();
const app = express();

app.use(express.json());
mongo.connect();

// app.use('/',(req, res, next) => {
// res.send("this is my fucking worldshhn")
// })

app.use('/hallbooking',getRouter)



app.listen(process.env.PORT  || 3000);