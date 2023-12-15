import './Admin.css'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Admin() {

  const [allEmployees, setAllEmployees] = useState([])

  const fetchData = async () => {
    const result = await axios.get('http://localhost:8000/getAllEmployee')
    setAllEmployees(result.data.employees)
  }

  //create an object for the hook



  console.log(allEmployees)
  useEffect(() => {
    fetchData()
  }, [])

  const handleDelete = async (id) => {
    const result = await axios.delete('http://localhost:8000/deleteEmployee/' + id)
    console.log(result)
    alert(result.data.message)

    // to refresh the table content
    fetchData()
  }

  return (
    <div>


      <div className='text-end mt-4 me-4'>
        <Link to={'/add'}>
          <Button variant='success'><i class="fa-solid fa-user-plus"></i> Add Employee</Button>
        </Link>
      </div>

      <h1 className='mt-5 '>
        <i class="fa-solid fa-house-chimney-user me-3"></i>
        Employee Management Application</h1>


      <p>TEXTS TO BE ADDED HERE</p>



      <Table className='w-75 container border text-center'
        striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Designation</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            allEmployees?.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item.uname}</td>
                <td>{item.age}</td>
                <td>{item.designation}</td>
                <td>{item.salary}</td>
                <td>
                  <Link to={'edit/' + item.id}>
                    <Button className='me-5' variant="secondary"><i class="fa-solid fa-user-pen"></i> Edit</Button>
                  </Link>

<Link to={'view/'+item.id}>
                  <Button className='me-5' variant="light"><i class="fa-solid fa-book-open-reader "></i> View</Button>

</Link>
                  <Button onClick={() => handleDelete(item.id)} variant='danger'><i class="fa-solid fa-user-xmark"></i> Delete</Button>
                </td>
              </tr>

            ))
          }

        </tbody>
      </Table>
    </div>
  )
}

export default Admin