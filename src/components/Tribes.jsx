import Tribe from "./Tribe";


export default function Tribes({ tribes }) {
  const tribesList = tribes.map((tribe) => (
    <Tribe
      id={tribe.id}
      name={tribe.name}
      department={tribe.department}
    ></Tribe>
  ));

  return (

    <div class="container-fluid main-employees p-10 align-items-center ">
      <table class="table table-hover shadow p-3 mb-5 bg-body rounded my-4">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Department</th>
          </tr>
        </thead>
        <tbody>{tribesList}</tbody>
      </table>
    </div>
  );
}
