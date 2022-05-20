const express = require('express');
const dotenv = require('dotenv');
const mongo = require('./shared');
const getRouter = require('./Router/hallbooking')
const cors = require("cors");
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
mongo.connect();

// app.use('/',(req, res, next) => {
// res.send("this is my fucking worldshhn")
// })

app.use('/hallbooking',getRouter)



app.listen(process.env.PORT  || 3000);