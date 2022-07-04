const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const port = process.env.PORT;
const routes = require("./routes/TodoRoutes");
const cors = require("cors");


const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,

}).then(()=>{
    console.log("mongodb connected");
}).catch((err)=>{
    console.log(err);
});

app.listen(port,()=>{
    console.log(`app is running on port ${port}`)
})