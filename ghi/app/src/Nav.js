import { NavLink } from 'react-router-dom';
import logoImage from "./imgs/logo.png";

function Nav() {
    const closeNavbar = () => {
    const navbarToggler = document.querySelector(".navbar-toggler");
    if (navbarToggler && navbarToggler.getAttribute("aria-expanded") === "true") {
      navbarToggler.click();
    }
  };

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
              <NavLink className="nav-link active" aria-current="page" to="/" onClick={closeNavbar}>
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
                  <NavLink className="dropdown-item" to="/manufacturers/" onClick={closeNavbar}>
                    All Manufacturers
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/manufacturers/create/" onClick={closeNavbar}>
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
                  <NavLink className="dropdown-item" to="/models/" onClick={closeNavbar}>
                    All Models
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/models/create/" onClick={closeNavbar}>
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
                  <NavLink className="dropdown-item" to="/automobiles/" onClick={closeNavbar}>
                    All Automobiles
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/automobiles/create/" onClick={closeNavbar}>
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
                  <NavLink className="dropdown-item" to="/salespeople" onClick={closeNavbar}>
                    All Salespeople
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/salespeople/new" onClick={closeNavbar}>
                    Add Salesperson
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/sales/history" onClick={closeNavbar}>
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
                  <NavLink className="dropdown-item" to="/customers" onClick={closeNavbar}>
                    All Customers
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/customers/new" onClick={closeNavbar}>
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
                  <NavLink className="dropdown-item" to="/sales" onClick={closeNavbar}>
                    All Sales
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/sales/new" onClick={closeNavbar}>
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
                  <NavLink className="dropdown-item" to="/technicians/" onClick={closeNavbar}>
                    All Technicians
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/technicians/new/" onClick={closeNavbar}>
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
                  <NavLink className="dropdown-item" to="/appointment/" onClick={closeNavbar}>
                    All Service Appointments
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/appointment/new/" onClick={closeNavbar}>
                    Create a Service Appointment
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/history/service/" onClick={closeNavbar}>
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
