const mongoose = require("mongoose")
mongoose.set('strictQuery', true)
mongoose.set('strictQuery', false);
async function getConnection (){
    await mongoose.connect('mongodb+srv://Parth:parth1213@cluster0.ixp5oxm.mongodb.net/?retryWrites=true&w=majority')
}

module.exports = getConnection
