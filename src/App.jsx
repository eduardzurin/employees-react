import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import EmployeesTable from "./components/EmployeesTable";
import Tribes from "./components/Tribes"
import AddEmployee from "./components/AddEmployee"

const employees = [
  {
    id: 1,
    name: "Mark",
    title: "Intern",
    tribe: "Internstellar",
    date: "08.12.2012",
  },
  {
    id: 2,
    name: "Helen",
    title: "Developer",
    tribe: "Gears",
    date: "08.10.2010",
  },
  {
    id: 3,
    name: "Dude",
    title: "Funny guy",
    tribe: "Billing",
    date: "08.12.2012",
  },
];

const tribes = [
  { id: 1, name: "InternStellar", department: "Other Engineering" },
  { id: 2, name: "Gears", department: "Engineering" },
  { id: 3, name: "Billing", department: "Giga Engineering" },
];

function App() {
  return (
      <BrowserRouter>
        <Navigation/>

        <Routes>
          <Route path="/" element={<div>test</div>}
          />
          <Route path="/employees" element={<EmployeesTable employeesList={employees}></EmployeesTable>}
          />
          <Route path="/tribes" element={<Tribes tribes={tribes}></Tribes>}
          />
        </Routes>
        
      </BrowserRouter>
  );
}

export default App;
