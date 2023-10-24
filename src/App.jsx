import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import EmployeesTable from "./components/EmployeesTable";
import Tribes from "./components/Tribes"




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
          <Route path="/employees" element={<EmployeesTable></EmployeesTable>}
          />
          <Route path="/tribes" element={<Tribes tribes={tribes}></Tribes>}
          />
        </Routes>
        
      </BrowserRouter>
  );
}


export default App;
