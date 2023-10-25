import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { axiosInstance } from "../index.js";
import AddEmployee from "./AddEmployee";
import Employee from "./Employee";

export default function EmployeesTable() {
  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    let ignore = false;

    if (!ignore) {
      fetchData();
    }
    return () => {
      ignore = true;
    };
  }, []);

  async function deleteEmployee(employee) {
    await axiosInstance
      .delete(`/employees/${employee.id}`)
      .then((response) => response.data);
    fetchData();
  }

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
    setEmployees(newEmployees)
  }

  async function fetchData() {
    setLoading(true);
    try {
      const data = await axiosInstance
        .get("/employees")
        .then((response) => response.data);
      data.forEach((employee) => {
        employee["tribe"] = employee.tribe.name;
      });
      setTimeout(() => { 
        setEmployees(data);
        setLoading(false);
      }, "1");

    } catch (error) {
      console.log(error);
    }
  }

  async function createEmployee(newEmployee) {
    const body = {
      name: newEmployee.name,
      title: newEmployee.title,
      tribe_id: newEmployee.tribe,
    }
    await axiosInstance.post(`/employees`, body).then((response) => response.data);
    fetchData();
  }

  //console.log(employees);
  const listEmployees = employees.map((employee) => (
    <Employee
      key={employee.id}
      employee={employee}
      deleteEmployee={deleteEmployee}
      update={updateEmployee}
    ></Employee>
  ));
  if (!loading) {
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
