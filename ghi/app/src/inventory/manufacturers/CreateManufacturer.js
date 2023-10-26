import React, { useState } from 'react';


const initialFormData = {
    name: '',
}

function CreateManufacturer() {
    const [formData, setFormData] = useState(
        initialFormData
        )
    const [manufacturerExists, setManufacturerExists] = useState(false)

    const handleSubmit = async(event) => {
        event.preventDefault();
        const manufacturerUrl = 'http://localhost:8100/api/manufacturers/'
        const fetchOptions = {
            method: 'post',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const manufacturerResponse = await fetch(manufacturerUrl, fetchOptions)
        if (manufacturerResponse.ok) {
            setFormData(
                initialFormData
            )
        } else {
            setManufacturerExists(true)
        }
    }

    const handleFormChange = (e) => {
        const value = e.target.value
        const inputName = e.target.name

        setFormData({
            ...formData,
            [inputName]: value
        })
        setManufacturerExists(false)
    }
    
    return(
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a Manufacturer</h1>
                    {manufacturerExists && (
                        <div className="alert alert-danger" role="alert">
                            Manufacturer already exists.
                        </div>
                    )}
                    <form onSubmit={handleSubmit} id="create-manufacturer-form">
                        <div className="form-floating mb-3">
                            <input name="name" 
                            value={formData.name} 
                            onChange={handleFormChange} 
                            placeholder="Name" 
                            required type="text" 
                            id="name" 
                            className="form-control" 
                            />
                            <label htmlFor="name">Name</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateManufacturer;
