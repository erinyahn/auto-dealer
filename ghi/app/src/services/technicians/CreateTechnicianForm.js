import React, { useState } from 'react';


const initialFormData = {
    first_name: '',
    last_name: '',
    employee_id: '',
}

function TechnicianForm() {
    const [formData, setFormData] = useState(
        initialFormData
        )

    const handleSubmit = async(event) => {
        event.preventDefault();
        const technicianUrl = 'http://localhost:8080/api/technicians/'
        const fetchOptions = {
            method: 'post',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const technicianResponse = await fetch(technicianUrl, fetchOptions)
        if (technicianResponse.ok) {
            setFormData(
                initialFormData
            )
        }
    }

    const handleFormChange = (e) => {
        const value = e.target.value
        const inputName = e.target.name

        setFormData({
            ...formData,
            [inputName]: value
        })
    }
    
    return(
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Add a Technician</h1>
                    <form onSubmit={handleSubmit} id="create-technician-form">
                        <div className="form-floating mb-3">
                            <input value={formData.first_name} onChange={handleFormChange} placeholder="First name" required type="text" name="first_name" id="first_name" className="form-control" />
                            <label htmlFor="first_name">First name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={formData.last_name} onChange={handleFormChange} placeholder="Last name" required type="text" name="last_name" id="last_name" className="form-control" />
                            <label htmlFor="last_name">Last name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={formData.employee_id} onChange={handleFormChange} placeholder="Employee ID" required type="text" name="employee_id" id="employee_id" className="form-control" />
                            <label htmlFor="employee_id">Employee ID</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TechnicianForm;
