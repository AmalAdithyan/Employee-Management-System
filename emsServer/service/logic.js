// now all the data is inside database we need to get all that from mongo database,we are creating  a logic for that here
const db = require('./db')

const allEmployee = () => {
    return db.Employee.find().then(result => {
        if (result) {
            return {
                statusCode: 200,
                employees: result
            }
        }
        else {
            return {
                statusCode: 404,
                message: "no data is available"
            }
        }
    })
}

const addEmployee = (id, uname, age, designation, salary) => {
    return db.Employee.findOne({ id }).then(results => {
        if (results) {
            return {
                statusCode: 404,
                message: "employee already present"
            }
        }
        else {
            const newEmp = new db.Employee({
                id,
                uname,
                age,
                designation,
                salary
            })
            newEmp.save()

            return {
                statusCode: 200,
                message: "employee added successfully"
            }
        }
    })
}


const removeEmployee = (eid) => {
    return db.Employee.deleteOne({ id: eid }).then(result => {
        if (result) {
            return {
                statusCode: 200,
                message: "employee removed successfully"
            }
        }
        else {
            return {
                statuscode: 404,
                message: "employee not present"
            }
        }
    })
}

const getAnEmp = (id) => {
   return db.Employee.findOne({ id }).then(result => {
        if (result) {
            return {
                statusCode: 200,
                employee: result
            }
        }
        else {

            return {
                statusCode: 404,
                message: "employee not present"
            }
        }
    })
}

const editEmp=(id,uname,age,designation,salary)=>{
    return db.Employee.findOne({id}).then(result=>{
        if(result){
        
                result.id=id
                result.uname=uname
                result.age=age
                result.designation=designation
                result.salary=salary
                
                result.save()
            return{
                statusCode:200,
                message:"employee data updated"
            }
            }
            else{
                return{
                    statusCode:404,
                    message:"employee not present"
                }
            }
        })
}

module.exports = {
    allEmployee, addEmployee, removeEmployee,getAnEmp,editEmp
}