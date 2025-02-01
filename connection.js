const mongoose =  require("mongoose")

async function connectmongodb(url){
    // mongoose.connect(url)
    console.log("connected to mongodb");
    return  mongoose.connect(url)
    .catch((err)=>{
        console.log(err);
    })
}

module.exports = {
    connectmongodb,
}