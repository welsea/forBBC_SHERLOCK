const mongoose = require('mongoose');

//schema
var videosSchema= new mongoose.Schema({
    bv:String
})

var videosModel= mongoose.model('videos', videosSchema);
module.exports=videosModel;