const mongoose = require('mongoose');

//schema
var videosSchema= new mongoose.Schema({
    aid:String,
    BV:String
})

var videosModel= mongoose.model('videos', videosSchema);
module.exports=videosModel;