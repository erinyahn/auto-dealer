import React, {useState, useEffect} from 'react';

const initialFormData = {
    automobile: '',
    salesperson: '',
    customer: '',
    price: '',
}

function SalesForm() {
    const [formData, setFormData] = useState(
        initialFormData
    )

    const [sales, setsales] = useState([])
    const [customers, setCustomer] = useState([])
    const [salespeople, setSalespeople] = useState([])
    const [autos, setAutomobile] = useState([])
    const [soldVins, setSoldVins] = useState([])

    const fetchData = async() => {
        const url = 'http://localhost:8090/api/sales/'
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json()
            setsales(data.sales)
        }
    }

    const fetchCustomerData = async() => {
        const url = 'http://localhost:8090/api/customers/'
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json()
            setCustomer(data.customers)
        }
    }

    const fetchSalespeopleData = async() => {
        const url = 'http://localhost:8090/api/salespeople/'
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json()
            setSalespeople(data.salespeople)
        }
    }

    const fetchAutomobileData = async() => {
        const url = 'http://localhost:8100/api/automobiles/'
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json()
            setAutomobile(data.autos)
        }
    }

    const loadSales = async () => {
        const urlSale = await fetch('http://localhost:8090/api/sales/');
        const responseSale = await urlSale.json();
        const vins = responseSale.sales.map(sale => sale.automobile.vin)
        setSoldVins(vins)
    }

    function availableVins() {
        const forSaleVins = [];
        for (const auto of autos) {
            if (!soldVins.includes(auto.vin)) {
                forSaleVins.push(auto.vin);
            }
        } return forSaleVins;
    }

    useEffect(() => {
        loadSales();
        fetchData();
        fetchCustomerData();
        fetchSalespeopleData();
        fetchAutomobileData();
    }, []);

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
        const response = await fetch(salesurl, fetchConfig)
        if (response.ok) {
            setFormData(
                initialFormData
            )
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
                                <select value={formData.automobile} onChange={handleFormChange} required name="automobile" id="automobile" className="form-select">
                                    <option value="">Automobile VIN</option>
                                    {availableVins().map(vin => {
                                        return (
                                            <option key={vin} value={vin}>
                                                {vin}
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
                                            <option key={salesperson.employee_id} value={salesperson.employee_id}>
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
                    <input value={formData.price} onChange={handleFormChange} placeholder="price" required type="text" name="price" id="price" className="form-control" />
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
