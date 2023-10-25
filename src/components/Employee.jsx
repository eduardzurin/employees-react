import '../index.css';
import UpdateEmployee from "./UpdateEmployee";
import useState from "react";

export default function Employee({employee, deleteEmployee, update}){

    return(
      <tr className="employee">
      <th scope="row">{employee.id}</th>
          <td>{employee.name}</td>
          <td>{employee.title}</td>
          <td>{employee.tribe}</td>
          <td>{employee.date}</td>
          <td>
        <button onClick={() => deleteEmployee(employee)} id='deletebtn' className="btn btn-danger">x</button>
        <UpdateEmployee updateEmployee={update} employee={employee} id='updatebtn' className="btn btn-primary"></UpdateEmployee>
      </td>
    </tr>

    )
}