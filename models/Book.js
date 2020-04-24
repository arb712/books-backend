const mongoose = require("mongoose")
const Schema = mongoose.Schema

const BookSchema = new Schema({
    bookTitle:{
        type:String,
        required:true,
    },
    years:{
        type:Number,
        required:true
    },
    bookNumber:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true
    }  
})

module.exports = mongoose.model("books",BookSchema)