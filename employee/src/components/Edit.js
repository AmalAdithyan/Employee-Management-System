import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import {React, useEffect, useState } from 'react';

function Edit() {

  const [id, setId] = useState('')
  const [uname, setUname] = useState('')
  const [age, setAge] = useState(0)
  const [designation, setDesignation] = useState('')
  const [salary, setSalary] = useState(0)

  const params = useParams()
  console.log(params.id)

  const fetchEmp = async () => {
    const result = await axios.get('http://localhost:8000/getAnEmp/' + params.id)
    console.log(result.data.employee)
    

    setId(result.data.employee.id)
    setUname(result.data.employee.uname)
    setAge(result.data.employee.age)
    setDesignation(result.data.employee.designation)
    setSalary(result.data.employee.salary)

    //console.log(id);
    //console.log(uname);

  }
  const location=useNavigate()


  const handleUpdate=async(e)=>{
    e.preventDefault()

    const body={
      id,
      uname,
      age,
      designation,
      salary
    }
   const result=await axios.post('http://localhost:8000/editEmp',body)
 alert(result.data.message)

location('/')
}

  useEffect(() => {
    fetchEmp()
  }, [])

  return (

    <div>
      <h1 className='mt-5 '>
        <i class="fa-solid fa-user-pen"></i>
        Edit Employee Details
      </h1>


      <p>TEXTS TO BE ADDED HERE</p>



      <Form className='p-5 w-50 container text-center'>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>UserName</Form.Label>
          <Form.Control type="text" placeholder="" value={uname} 
          onChange={(e)=>setUname(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Age</Form.Label>
          <Form.Control type="text" placeholder=""  value={age}
          onChange={(e)=>setAge(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Designation</Form.Label>
          <Form.Control type="text" placeholder="" value={designation}
          onChange={(e)=>setDesignation(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Salary</Form.Label>
          <Form.Control type="text" placeholder="" value={salary} 
          onChange={(e)=>setSalary(e.target.value)}/>
        </Form.Group>
      
        <Button onClick={(e)=>handleUpdate(e)} className='p-2' variant="light">Update</Button>
      
      </Form>

    </div>
  )
}

export default Edit