import "./App.css";
import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import AddProjects from "./Pages/AddProjects";
import ManageProjects from "./Pages/ManageProjects";
import AddPurchase from "./Pages/AddPurchase";
import ManagePurchase from "./Pages/ManagePurchase";
import Employees from "./Pages/Employees";
import Proposal from "./Pages/Proposal";
import Inventory from "./Pages/Inventory";
import Tools from "./Pages/Tools";
import RawMaterials from "./Pages/RawMaterials";
import Tools2 from "./Pages/Tools2";
import RawMaterials2 from "./Pages/RawMaterials2";
import Invoice from "./Pages/Invoice";
import Users from "./Pages/Users";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/AddProjects" element={<AddProjects />} />
          <Route path="/ManageProjects" element={<ManageProjects />} />
          <Route path="/AddPurchase" element={<AddPurchase />} />
          <Route path="/ManagePurchase" element={<ManagePurchase />} />
          <Route path="/Employees" element={<Employees />} />
          <Route path="/ProposalMaking" element={<Proposal />} />
          <Route path="/Inventory" element={<Inventory />} />
          <Route path="/Tools" element={<Tools />} />
          <Route path="/Raw" element={<RawMaterials />} />
          <Route path="/Tools2" element={<Tools2 />} />
          <Route path="/Raw2" element={<RawMaterials2 />} />
          <Route path="/Invoice" element={<Invoice />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
