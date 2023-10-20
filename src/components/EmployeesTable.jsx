import Employee from "./Employee";
import AddEmployee from "./AddEmployee";

export default function EmployeesTable({ employeesList }) {
  console.log(employeesList);
  const listEmployees = employeesList.map((employee) => (
    <Employee
      id={employee.id}
      name={employee.name}
      title={employee.title}
      tribe={employee.tribe}
      date={employee.date}
    ></Employee>
  ));
  return (
    <>
      <AddEmployee></AddEmployee>
      <div class="container-fluid main-employees p-10 align-items-center">
        <table class="table table-hover shadow p-3 mb-5 bg-body rounded my-4">
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
