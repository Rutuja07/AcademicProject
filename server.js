
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRouter = require("./routes/user-api");
const requestRouter = require("./routes/request-api");
const app = express();

// Connection to mongodb
async function connectDb(){
mongoose.connect('======', {useNewUrlParser : true, useUnifiedTopology: true});
console.log("db connected");
}
connectDb()
// Middleware to handle body parser
app.use(express.json());

// Middleware to handle User request
app.use('/api/user', userRouter);

// Middleware to handle driver request
app.use('/api/request', requestRouter);


// port
app.listen(8000,() => { 
    console.log("Server running in port 8000");
});



