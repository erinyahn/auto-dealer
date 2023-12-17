import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import SalespersonForm from './sales/SalespersonForm';
import SalespersonList from './sales/SalespersonList';
import CustomerList from './sales/CustomerList';
import CustomerForm from './sales/CustomerForm';
import SalesForm from './sales/SalesForm';
import SalesList from './sales/SalesList';
import SalespersonHistory from './sales/SalespersonHistory';
import CreateTechnicianForm from './services/technicians/CreateTechnicianForm';
import TechnicianList from './services/technicians/TechnicianList';
import AppointmentList from './services/appointment/AppointmentList';
import CreateAppointmentForm from './services/appointment/CreateAppointmentForm'
import ServiceHistoryList from './services/ServiceHistoryList';
import ManufacturerList from './inventory/manufacturers/ManufacturersList'
import CreateManufacturer from './inventory/manufacturers/CreateManufacturer'
import VehicleModelList from './inventory/vehicle/VehicleModelList'
import CreateVehicleModel from './inventory/vehicle/CreateVehicleModel'
import AutomobileInventory from './inventory/automobile/AutomobileInventory'
import CreateAutomobile from './inventory/automobile/CreateAutomobile'
import './index.css'

function App() {
  return (
    <BrowserRouter>
    <div className = "mainpage">
      <Nav />
      <div className="mainbody">
        <Routes>
          <Route path="/" element={<MainPage />} />

          <Route path="manufacturers">
            <Route path="" element={<ManufacturerList />} />
            <Route path="create" element={<CreateManufacturer />} />
          </Route>

          <Route path="models">
            <Route path="" element={<VehicleModelList />} />
            <Route path="create" element={<CreateVehicleModel />} />
          </Route>

          <Route path="automobiles">
            <Route path="" element={<AutomobileInventory />} />
            <Route path="create" element={<CreateAutomobile />} />
          </Route>

          <Route path="salespeople">
            <Route path="" element={<SalespersonList/>} />
            <Route path="new" element={<SalespersonForm/>} />
          </Route>

          <Route path="customers">
            <Route path="" element={<CustomerList/>} />
            <Route path="new" element={<CustomerForm/>} />
          </Route>

          <Route path="sales">
            <Route path="" element={<SalesList/>} />
            <Route path="new" element={<SalesForm/>} />
            <Route path="history" element={<SalespersonHistory/>} />
          </Route>

          <Route path="technicians">
            <Route path="" element={<TechnicianList/>}/>
            <Route path="new" element={<CreateTechnicianForm/>}/>
          </Route>

          <Route path="appointment">
            <Route path="" element={<AppointmentList/>}/>
            <Route path="new" element={<CreateAppointmentForm/>}/>
          </Route>

          <Route path="history">
            <Route path="service" element={<ServiceHistoryList/>}/>
          </Route>

        </Routes>
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
