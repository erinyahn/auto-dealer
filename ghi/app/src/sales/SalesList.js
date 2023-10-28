import { useEffect, useState } from 'react';

function SalesList() {
  const [sales, setSales] = useState([])

  const getData = async () => {
    const response = await fetch('http://localhost:8090/api/sales/');
    if (response.ok) {
      const data = await response.json();
      setSales(data.sales)
    }
  }

  useEffect(()=>{
    getData();
  }, [])

  return (
    <div>
    <h1>Sales</h1>
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Employee ID</th>
          <th>Salesperson</th>
          <th>Customer</th>
          <th>VIN</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
      {sales.map(sales => {
          return (
            <tr key={sales.id}>
              <td>{ sales.salesperson.employee_id }</td>
              <td>{ `${sales.salesperson.first_name} ${sales.salesperson.last_name}` }</td>
              <td>{ `${sales.customer.first_name} ${sales.customer.last_name}` }</td>
              <td>{ sales.automobile.vin }</td>
              <td>{ sales.price }</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  );
}

export default SalesList;
