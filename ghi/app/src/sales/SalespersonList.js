import { useEffect, useState } from 'react';

function SalespersonList() {
  const [salespeople, setSalespeople] = useState([])

  const getData = async () => {
    const response1 = await fetch('http://localhost:8090/api/salespeople/');
    if (response1.ok) {
      const data = await response1.json();
      setSalespeople(data.salespeople)
    }
  }

  useEffect(()=>{
    getData()
  }, [])


  return (
    <div>
    <h1>Salesperson</h1>
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Employee ID</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        {salespeople.map(salespeople => {
          return (
            <tr key={salespeople.id}>
              <td>{ salespeople.employee_id }</td>
              <td>{ salespeople.first_name }</td>
              <td>{ salespeople.last_name }</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  );
}

export default SalespersonList;
