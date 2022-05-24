const express = require('express');
const dotenv = require('dotenv');
const mongo = require('./shared');
const getRouter = require('./Router/hallbooking')
const cors = require("cors");
const app = express();

dotenv.config();
mongo.connect();
app.use(cors());
app.use(express.json());


// app.use('/',(req, res, next) => {
// res.send("this is my fucking worldshhn")
// })

app.use('/hallbooking',getRouter)



const port=process.env.PORT || 3050;

app.listen(port,function(){
    console.log("Server started successfully");
});