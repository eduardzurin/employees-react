export default function Employee(props){
    return(
      <tr>
      <th scope="row">{props.id}</th>
          <td>{props.name}</td>
          <td>{props.title}</td>
          <td>{props.tribe}</td>
          <td>{props.date}</td>
          <td>
        <button className="btn btn-danger">x</button>
      </td>
    </tr>

    )
}