import '../index.css';

export default function Employee({employee, deleteEmployee}){
    return(
      <tr className="employee">
      <th scope="row">{employee.id}</th>
          <td>{employee.name}</td>
          <td>{employee.title}</td>
          <td>{employee.tribe}</td>
          <td>{employee.date}</td>
          <td>
        <button onClick={() => deleteEmployee(employee)} className="btn btn-danger">x</button>
      </td>
    </tr>

    )
}