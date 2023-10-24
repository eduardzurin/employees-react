import Employee from "./Employee";
import AddEmployee from "./AddEmployee";
import { useState } from "react";



export default function EmployeesTable() {

  function deleteEmployee(employee){
    setEmployees(employees.filter((emp) => employee.id !== emp.id))
  }

  function createEmployee(newEmployee){
    newEmployee.id = employees.length + 1;
    const newState = [...employees, newEmployee]
    setEmployees(newState)
  }

  

  const [employees, setEmployees] =   useState([
    {
      id: 1,
      name: "Mark",
      title: "Intern",
      tribe: "Internstellar",
      date: "08/12/2012",
    },
    {
      id: 2,
      name: "Helen",
      title: "Developer",
      tribe: "Gears",
      date: "08/10/2010",
    },
    {
      id: 3,
      name: "Dude",
      title: "Funny guy",
      tribe: "Billing",
      date: "08/12/2012",
    },  
  ]);


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


