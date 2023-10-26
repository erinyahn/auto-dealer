import React, {useState, useEffect} from 'react';

function SalesForm() {
    const [formData, setFormData] = useState({
        vin: '',
        salesperson: '',
        customer: '',
        price: '',
    })

    const [sales, setsales] = useState([])

    const fetchData = async() => {
        const url = 'http://localhost:8090/api/sales/'
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json()
            setsales(data.sales)
        }
    }


    const [customers, setCustomer] = useState([])

    const fetchCustomerData = async() => {
        const url = 'http://localhost:8090/api/customers/'
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json()
            setCustomer(data.customers)
        }
    }


    const [salespeople, setSalespeople] = useState([])

    const fetchSalespeopleData = async() => {
        const url = 'http://localhost:8090/api/salespeople/'
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json()
            setSalespeople(data.salespeople)
        }
    }


    const [autos, setAutomobile] = useState([])

    const fetchAutomobileData = async() => {
        const url = 'http://localhost:8100/api/automobiles/'
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            setAutomobile(data.autos)
            setTimeout(() => {
                isAvailable();
            }, 1100)
        }
    }


    const [soldVins, setVinsArray] = useState([])

    const loadSales = async () => {
        const urlSale = await fetch('http://localhost:8090/api/sales/');
        const responseSale = await urlSale.json();
        const vins = responseSale.sales.map(sale => sale.automobile.vin)
        setVinsArray(vins)
      }

    useEffect(() => {
        loadSales();
        fetchData();
        fetchCustomerData();
        fetchSalespeopleData();
        fetchAutomobileData();
    }, []);


    function isAvailable() {
        const final = soldVins.filter(vin => {
            for (const auto of autos) {
                if (vin !== auto.vin) {
                    console.log("sold", vin)
                } else {
                    console.log("unsold", auto.vin)
                }
            }
        })
        console.log(final)
        return final
    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        const salesurl = 'http://localhost:8090/api/sales/';

        const fetchConfig = {
            method: "post",
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            },
        };

        const response = await fetch(salesurl, fetchConfig);

        if (response.ok) {
            setFormData({
                vin: '',
                salesperson: '',
                customer: '',
                price: '',
            });
        }
    }

    const handleFormChange = (e) => {
        const value = e.target.value;
        const inputName = e.target.name;
        setFormData({
            ...formData,
            [inputName]: value
        })
    }

        return (
            <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Record a new sale</h1>
                <form onSubmit={handleSubmit} id="create-customer-form">
                <div className="mb-3">
                    <select value={formData.vin} onChange={handleFormChange} required name="vin" id="vin" className="form-select">
                    <option value="">Automobile VIN</option>
                    {autos.map(auto => {
                        return (
                            <option key={auto.id} value={auto.id}>
                                {(auto.vin)}
                            </option>
                        );
                    })}
                    </select>
                </div>
                <div className="mb-3">
                    <select value={formData.salesperson} onChange={handleFormChange} required name="salesperson" id="salesperson" className="form-select">
                    <option value="">Salesperson</option>
                    {salespeople.map(salesperson => {
                        return (
                            <option key={salesperson.id} value={salesperson.id}>
                                {`${salesperson.first_name} ${salesperson.last_name}`}
                            </option>
                        );
                    })}
                    </select>
                </div>
                <div className="mb-3">
                    <select value={formData.customer} onChange={handleFormChange} required name="customer" id="customer" className="form-select">
                    <option value="">Customer</option>
                    {customers.map(customer => {
                        return (
                            <option key={customer.id} value={customer.id}>
                                {`${customer.first_name} ${customer.last_name}`}
                            </option>
                        );
                    })}
                    </select>
                </div>
                <div className="form-floating mb-3">
                    <input value={formData.price} onChange={handleFormChange} placeholder="price" required type="price" name="price" id="price" className="form-control" />
                    <label htmlFor="price">Price</label>
                </div>
                <button className="btn btn-primary">Create</button>
                </form>
            </div>
            </div>
        </div>
    )
}

export default SalesForm;
