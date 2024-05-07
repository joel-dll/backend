var express = require('express');
var server = express();
var routes = require('./routes/routes');
var mongoose = require('mongoose');
const cors = require('cors');
mongoose.connect("mongodb+srv://Joel:123@full-stack-web-applicat.fqa1a2h.mongodb.net/SolentNursery_childList",{useNewUrlParser: true,  useUnifiedTopology: true },function checkDB(error)
{
    if(error)
    {
        console.log("errorr")
    }
    else
    {
        console.log("Mongo DB Connected!")
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
        console.log("Started!")
    }
});