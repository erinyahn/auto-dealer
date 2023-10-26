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

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />

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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
