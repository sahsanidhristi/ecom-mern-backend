const mongoose = require("mongoose")

const mongoDbUrl='mongodb+srv://codewithzosh:lognBCBmtWNPjrKC@cluster0.wvt9jpw.mongodb.net/?retryWrites=true&w=majority'

//  const mongoDbUrl="mongodb+srv://dsahsani:XRh0Dp8Toif61eLL@cluster0.3sp4pwi.mongodb.net/?retryWrites=true&w=majority"
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}