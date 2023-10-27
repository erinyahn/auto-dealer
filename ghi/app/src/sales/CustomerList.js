import { useEffect, useState } from 'react';

function CustomerList() {
  const [customers, setCustomers] = useState([])

  const getData = async () => {
    const response1 = await fetch('http://localhost:8090/api/customers/');

    if (response1.ok) {
      const data = await response1.json();
      setCustomers(data.customers)
    }
  }


  useEffect(()=>{
    getData()
  }, [])


  return (
    <div>
    <h1>Customers</h1>
    <table className="table table-striped">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone Number</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {customers.map(customers => {
          return (
            <tr key={customers.id}>
              <td>{ customers.first_name }</td>
              <td>{ customers.last_name }</td>
              <td>{ customers.phone_number }</td>
              <td>{ customers.address }</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  );
}

export default CustomerList;
