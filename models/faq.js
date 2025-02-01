const mongoose = require("mongoose");

const faqSchema = new mongoose.Schema({
  question:{
    type:String,
    required:true
  },
  answer: {
    type:String,
    required:true
  },
    language:{
        type: String,
        default : "eng"
    },
    
},{timestamps:true});

const FAQ = mongoose.model("FAQ", faqSchema);
module.exports = FAQ;
