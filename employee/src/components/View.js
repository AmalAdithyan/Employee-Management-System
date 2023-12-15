import axios from 'axios';
import {React,useEffect, useState,} from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams } from 'react-router-dom';


function View() {

const[employee,setEmployee]=useState({})  
const params =useParams()

  const fetchEmp = async () => {
    const result = await axios.get('http://localhost:8000/getAnEmp/' + params.id)
    setEmployee(result.data.employee)
  }
console.log(employee);

  useEffect(()=>{
    fetchEmp()
  },[])
  return (



    <div>

      <h1 className='mt-5 '>
        <i class="fa-solid fa-house-chimney-user me-3"></i>
        View Employee Details
        </h1>


      <p>TEXTS TO BE ADDED HERE</p>

      <Card className='w-50 container'>
        <Card.Img variant="top" style={{height:550}} src="https://i.postimg.cc/MKvBRLXH/employee.png" />
        <Card.Body>
          <Card.Title className='text-center'><h2>Employee Name :{employee.uname}</h2></Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
        <ListGroup.Item>Designation : {employee.designation}</ListGroup.Item>
          <ListGroup.Item>Age : {employee.age}</ListGroup.Item>
          <ListGroup.Item>Salary : {employee.salary}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>

    </div>
  )
}

export default View