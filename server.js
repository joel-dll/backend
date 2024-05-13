var express = require('express');
var server = express();
var routes = require('./routes/routes');
var mongoose = require('mongoose');
const cors = require('cors');


mongoose.set('strictQuery', false);

mongoose.connect("mongodb+srv://Joel:123@full-stack-web-applicat.fqa1a2h.mongodb.net/test&SolentNursery_childList",{useNewUrlParser: true,  useUnifiedTopology: true },function checkDB(error)


{
    if(error)
    {
        console.log("errorr")
    }
    else
    {
        console.log("Mongo DB (test&SolentNursery_childList) Connected!")
    }
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(8000,function check(error)
{
    if(error)
    {
        console.log("errorr")
    }
    else
    {
        console.log("Server started on Port 8000 (http://localhost:8000)")
    }
});
