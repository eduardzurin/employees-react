import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useDispatch, useSelector } from 'react-redux';
import { axiosInstance } from "../index.js";
import { fetch } from "../store/actions/employees";
import AddEmployee from "./AddEmployee";
import Employee from "./Employee";

export default function EmployeesTable() {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.users.employeesList)
  const loading = useSelector((state) => state.users.loading)


  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      dispatch(fetch());
    }
    return () => {
      ignore = true;
    };
  }, [dispatch]);

  async function updateEmployee(newEmployee) {
    console.log(newEmployee)
    const newEmployees = structuredClone(employees)
    for (const index in newEmployees) {
      if (newEmployees[index].id === newEmployee.id) {
        newEmployees[index].name = newEmployee.name;
        newEmployees[index].title = newEmployee.title;
        newEmployees[index].tribe = newEmployee.tribe;
      }
    }
    //setEmployees(newEmployees)
  }

  const listEmployees = employees.map((employee) => (
    <Employee
      key={employee.id}
      employee={employee}
      update={updateEmployee}
    ></Employee>
  ));
  if (!loading) {
    return (
      <>
        <AddEmployee></AddEmployee>
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
  } else {
    return (
  
<div className="d-flex justify-content-center align-items-center vh-100">
  <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>
</div>
    );
  }
}
