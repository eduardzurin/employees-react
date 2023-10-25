import Employee from "./Employee";
import AddEmployee from "./AddEmployee";
import { useState } from "react";
import {axiosInstance} from "../index.js";
import { useEffect } from 'react';



export default function EmployeesTable() {

  const [employees, setEmployees] =   useState([]);

  useEffect(() => {
    let ignore = false;

    if(!ignore){
      fetchData()
    }
    return () => {
      ignore = true;
    };
  }, []);


  async function deleteEmployee(employee){
    await axiosInstance.delete(`/employees/${employee.id}`).then(response => response.data)
    fetchData();
  }

  async function fetchData(){
    try{
      const data = await axiosInstance.get('/employees').then(response => response.data)
      data.forEach((employee) => {
        employee['tribe'] = employee.tribe.name;
      });
      setEmployees(data)
    }catch(error){
      console.log(error)
    }
  }


  function createEmployee(newEmployee){
    newEmployee.id = employees.length + 1;
    const newState = [...employees, newEmployee]
    setEmployees(newState)
  }


  



  console.log(employees);
  const listEmployees = employees.map((employee) => (
    <Employee key={employee.id} employee={employee} deleteEmployee={deleteEmployee}
    ></Employee>
  ));
  return (
    <>
      <AddEmployee createEmployee={createEmployee}></AddEmployee>
      <div className="container-fluid main-employees p-10 align-items-center">
        <table className="table table-hover shadow p-3 mb-5 bg-body rounded my-4">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Position</th>
              <th scope="col">Tribe</th>
              <th scope="col">Start date</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>{listEmployees}</tbody>
        </table>
      </div>
    </>
  );
}


