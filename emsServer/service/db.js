//install mongoose (npm_install_mongoose) for instegration and the import mongoose
const mongoose= require('mongoose')

mongoose.connect('mongodb://localhost:27017/ems')

//model creation 
 //const model name should be start with capital leter and should be 
    //singular,mongoose.model is used and iknside expects an argument 
    //first argument should be modell name inside string/quotes and next arg is schema
    const Employee = mongoose.model('Employee',{    
id:String,
uname:String,
age:Number,
designation:String,
salary:Number
})

module.exports={
    Employee
}