import React, {useState, useEffect} from 'react';

function CustomerForm() {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        phone_number: '',
        address: '',
    })

    const [customers, setcustomers] = useState([])

    const fetchData = async() => {
        const url = 'http://localhost:8090/api/customers/'
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json()
            setcustomers(data.customers)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const customersurl = 'http://localhost:8090/api/customers/';

        const fetchConfig = {
            method: "post",
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            },
        };

        const response = await fetch(customersurl, fetchConfig);

        if (response.ok) {
            setFormData({
                first_name: '',
                last_name: '',
                phone_number: '',
                address: '',
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
                <h1>Add a Customer</h1>
                <form onSubmit={handleSubmit} id="create-customer-form">
                <div className="form-floating mb-3">
                    <input value={formData.first_name} onChange={handleFormChange} placeholder="first_name" required type="text" name="first_name" id="first_name" className="form-control" />
                    <label htmlFor="first_name">First Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input value={formData.last_name} onChange={handleFormChange} placeholder="last_name" required type="text" name="last_name" id="last_name" className="form-control" />
                    <label htmlFor="last_name">Last Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input value={formData.phone_number} onChange={handleFormChange} placeholder="phone_number" required type="phone_number" name="phone_number" id="phone_number" className="form-control" />
                    <label htmlFor="phone_number">Phone Number</label>
                </div>
                <div className="form-floating mb-3">
                    <input value={formData.address} onChange={handleFormChange} placeholder="address" required type="address" name="address" id="address" className="form-control" />
                    <label htmlFor="address">Address</label>
                </div>
                <button className="btn btn-primary">Create</button>
                </form>
            </div>
            </div>
        </div>
    )
}

export default CustomerForm;
