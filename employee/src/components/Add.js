import { React, useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import uuid from 'react-uuid';
import axios from 'axios'; import { useNavigate, Link } from 'react-router-dom';




function Add() {
  const [id, setId] = useState('')
  const [uname, setUname] = useState('')
  const [age, setAge] = useState(0)
  const [designation, setDesignation] = useState('')
  const [salary, setSalary] = useState(0)

  useEffect(() => {
    setId(uuid().slice(0, 3))
  }, []);


  //create ann object for the hook

  let location = useNavigate()


  const addEmployee = async (e) => {
    e.preventDefault();


    setId(uuid().slice(0, 3));

    const body = {
      id, // since the key and value are same just a coma is needed instead of id:id uname:uname etc...
      uname,
      age,
      designation,
      salary
    }
    //console.log(uname);
    //console.log(age);
    //console.log(designation);
    //console.log(salary);
    //console.log(body);
    const result = await axios.post('http://localhost:8000/addEmployee', body)
    console.log(result)

    alert(result.data.message)
    // redirect to the home page
    location('/')
  }




  return (
    <div>
      <h1 className='mt-5 '>
        <i class="fa-solid fa-house-chimney-user me-3"></i>
        Employee Management App
      </h1>


      <p>TEXTS TO BE ADDED HERE</p>


      <h3 className='mt-5 p-3 ms-3 text-center'>
        <i class="fa-solid fa-user-plus me-3"></i>
        Add New Employee
      </h3>

      <Form className='p-5 w-75 container'>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>User Name</Form.Label>
          <Form.Control onChange={(e) => setUname(e.target.value)} type="text" placeholder="" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Age</Form.Label>
          <Form.Control onChange={(e) => setAge(e.target.value)} type="text" placeholder="" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Designation</Form.Label>
          <Form.Control onChange={(e) => setDesignation(e.target.value)} type="text" placeholder="" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Salary</Form.Label>
          <Form.Control onChange={(e) => setSalary(e.target.value)} type="text" placeholder="" />
        </Form.Group>

        <Button onClick={(e) => addEmployee(e)} className='ms-4' variant="light">Add</Button>

        <Link to={'/'}>
          <Button className='ms-3' variant="warning">Cancel</Button>
        </Link>


      </Form>


    </div>
  )
}

export default Add