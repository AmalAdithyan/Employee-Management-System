const express = require('express')

const server = express(); //express method is used to create server and is stored in const server variable

const cors = require('cors'); //cors method is used to conect with frontend and server.using require cors is imported and stored in const cors variable
const logic = require('./service/logic')
// connect with frontend
server.use(cors({ origin: 'http://localhost:3000' })) //  this line of code is setting up the server to use the cors middleware,
// which is configured to allow cross-origin requests specifically from http://localhost:3000.
// This is a common practice when developing a client-server architecture, where the server and the client may run on different domains,
// and CORS needs to be configured to ensure secure communication between them.

server.use(express.json()); //this line of code is setting up the server to use the express.json middleware.

// now we need to run the server ,so we need to set the port for that we use server.listen( method)

server.listen(8000, () => {
    console.log('server started at port 8000')
}) //to check if the server is  working,for that we need to run this and for that we use nodemon(dont use node becose of no-recompilation ) so install nodemon 
// and run sthe command (npx_nodemon_index.js)

server.get('/getAllEmployee', (req, res) => {
    logic.allEmployee().then(result => {
        res.status(result.statusCode).json(result)
    })
})

server.delete('/deleteEmployee/:id', (req, res) => {
    logic.removeEmployee(req.params.id).then(result => {
        res.status(result.statusCode).json(result)
    })
})

server.post('/addEmployee', (req, res) => {
    logic.addEmployee(req.body.id, req.body.uname, req.body.age, req.body.designation, req.body.salary).then(result => {
        res.status(result.statusCode).json(result)
    })
})

server.get('/getAnEmp/:id', (req, res) => {
    logic.getAnEmp(req.params.id).then(result => {
        res.status(result.statusCode).json(result)
    })
})

server.post('/editEmp', (req, res) => {
    logic.editEmp(req.body.id, req.body.uname, req.body.age, req.body.designation, req.body.salary).then(result => {
        res.status(result.statusCode).json(result)
    })
})