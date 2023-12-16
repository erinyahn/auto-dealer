import { NavLink } from 'react-router-dom';
import logoImage from "./imgs/logo.png";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img
            src={logoImage}
            alt="Logo"
            className="logo-image"
            style={{ width: '50px', height: '50px' }}
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ flexWrap: "wrap" }}>
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="manufacturersDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Manufacturers
              </a>
              <ul className="dropdown-menu" aria-labelledby="manufacturersDropdown">
                <li>
                  <NavLink className="dropdown-item" to="/manufacturers/">
                    All Manufacturers
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/manufacturers/create/">
                    Create a Manufacturer
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="modelsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Models
              </a>
              <ul className="dropdown-menu" aria-labelledby="modelsDropdown">
                <li>
                  <NavLink className="dropdown-item" to="/models/">
                    All Models
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/models/create/">
                    Create a Model
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="automobilesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Automobiles
              </a>
              <ul className="dropdown-menu" aria-labelledby="automobilesDropdown">
                <li>
                  <NavLink className="dropdown-item" to="/automobiles/">
                    All Automobiles
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/automobiles/create/">
                    Create an Automobile
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="salespeopleDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Salespeople
              </a>
              <ul className="dropdown-menu" aria-labelledby="salespeopleDropdown">
                <li>
                  <NavLink className="dropdown-item" to="/salespeople">
                    All Salespeople
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/salespeople/new">
                    Add Salesperson
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/sales/history">
                    Salesperson History
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="customersDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Customers
              </a>
              <ul className="dropdown-menu" aria-labelledby="customersDropdown">
                <li>
                  <NavLink className="dropdown-item" to="/customers">
                    All Customers
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/customers/new">
                    Add Customer
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="salesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sales
              </a>
              <ul className="dropdown-menu" aria-labelledby="salesDropdown">
                <li>
                  <NavLink className="dropdown-item" to="/sales">
                    All Sales
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/sales/new">
                    New Sale
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="techniciansDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Technicians
              </a>
              <ul className="dropdown-menu" aria-labelledby="techniciansDropdown">
                <li>
                  <NavLink className="dropdown-item" to="/technicians/">
                    All Technicians
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/technicians/new/">
                    Add a Technician
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="appointmentsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Service Appointments
              </a>
              <ul className="dropdown-menu" aria-labelledby="appointmentsDropdown">
                <li>
                  <NavLink className="dropdown-item" to="/appointment/">
                    All Service Appointments
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/appointment/new/">
                    Create a Service Appointment
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/history/service/">
                    Service History
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
