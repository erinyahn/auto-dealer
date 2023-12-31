import React, {useState, useEffect} from 'react';

function SalespersonForm() {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        employee_id: '',
    })

    const [salespeople, setSalespeople] = useState([])

    const fetchData = async() => {
        const url = 'http://localhost:8090/api/salespeople/'
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json()
            setSalespeople(data.salespeople)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const salespeopleurl = 'http://localhost:8090/api/salespeople/';

        const fetchConfig = {
            method: "post",
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            },
        };

        const response = await fetch(salespeopleurl, fetchConfig);

        if (response.ok) {
            setFormData({
                first_name: '',
                last_name: '',
                employee_id: '',
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
                <h1>Add a Salesperson</h1>
                <form onSubmit={handleSubmit} id="create-salesperson-form">
                <div className="form-floating mb-3">
                    <input value={formData.first_name} onChange={handleFormChange} placeholder="first_name" required type="text" name="first_name" id="first_name" className="form-control" />
                    <label htmlFor="first_name">First Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input value={formData.last_name} onChange={handleFormChange} placeholder="last_name" required type="text" name="last_name" id="last_name" className="form-control" />
                    <label htmlFor="last_name">Last Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input value={formData.employee_id} onChange={handleFormChange} placeholder="employee_id" required type="employee_id" name="employee_id" id="employee_id" className="form-control" />
                    <label htmlFor="employee_id">Employee ID</label>
                </div>
                <button className="btn btn-primary">Create</button>
                </form>
            </div>
            </div>
        </div>
    )
}

export default SalespersonForm;
