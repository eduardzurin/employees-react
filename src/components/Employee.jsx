import '../index.css';
import UpdateEmployee from "./UpdateEmployee";
import useState from "react";
import { useDispatch} from 'react-redux';
import { deleteEmp} from "../store/actions/employees";

export default function Employee({employee, update}){
  const dispatch = useDispatch();

    return(
      <tr className="employee">
      <th scope="row">{employee.id}</th>
          <td>{employee.name}</td>
          <td>{employee.title}</td>
          <td>{employee.tribe}</td>
          <td>{employee.date}</td>
          <td>
        <button onClick={() => dispatch(deleteEmp(employee))} id='deletebtn' className="btn btn-danger">x</button>
        <UpdateEmployee updateEmployee={update} employee={employee} id='updatebtn' className="btn btn-primary"></UpdateEmployee>
      </td>
    </tr>

    )
}