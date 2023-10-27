import { useEffect, useState } from 'react';

function SalespersonHistory() {
  const [sales, setSales] = useState([])
  const [selectedSalesperson, setSelectedSalesperson] = useState(null)
  const [salespeople, setSalespeople] = useState([])

  const getData = async () => {
    const response = await fetch('http://localhost:8090/api/sales/');
    if (response.ok) {
      const data = await response.json();
      setSales(data.sales)
    }
  }

  const getSalespeople = async () => {
    const response1 = await fetch('http://localhost:8090/api/salespeople/');
    if (response1.ok) {
      const data = await response1.json();
      setSalespeople(data.salespeople)
    }
  }

  useEffect(()=>{
    getData();
  }, [])

  function handleSelection(event) {
    setSelectedSalesperson(event.target.value)
  }

  return (
    <div>
    <h1>Salesperson History</h1>
    <select className="form-select" aria-label="Default select example" onChange={handleSelection}>
        <option>Select Salesperson</option>
        {sales.map(salesperson => {
            return (
                <option key={salesperson.id} value={salesperson.id}>
                    { `${salesperson.salesperson.first_name} ${salesperson.salesperson.last_name}` }
                </option>
            )
        })}
    </select>
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Salesperson</th>
          <th>Customer</th>
            <th>VIN</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {sales
            .filter((sale) => sale.salesperson.id == selectedSalesperson)
            .map(sale => (
              <tr key={sale.id}>
                <td>{`${sale.salesperson.first_name} ${sale.salesperson.last_name}`}</td>
                <td>{`${sale.customer.first_name} ${sale.customer.last_name}`}</td>
                <td>{sale.automobile.vin}</td>
                <td>{sale.price}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default SalespersonHistory;
