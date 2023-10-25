import React, { useEffect, useState } from 'react';


const initialFormData = {
    color: '',
    year: '',
    vin: '',
    model_id: ''
}

function CreateAutomobile() {
    const [formData, setFormData] = useState(
        initialFormData        
    )

    const [models, setModels] = useState([])

    const fetchData = async() => {
        const url = 'http://localhost:8100/api/models/';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setModels(data.models)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const autoUrl = 'http://localhost:8100/api/automobiles/';
        const fetchOptions = {
            method: 'post',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const autoResponse = await fetch(autoUrl, fetchOptions);
        if (autoResponse.ok) {
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
                    <h1>Create an Automobile</h1>
                    <form onSubmit={handleSubmit} id="create-shoe-form">
                        <div className="form-floating mb-3">
                            <input value={formData.color} onChange={handleFormChange} placeholder="Color" required type="text" name="color" id="color" className="form-control" />
                            <label htmlFor="color">Color</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={formData.year} onChange={handleFormChange} placeholder="Year" required type="number" name="year" id="year" className="form-control" />
                            <label htmlFor="year">Year</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={formData.vin} onChange={handleFormChange} placeholder="Vin" required type="text" name="vin" id="vin" className="form-control" />
                            <label htmlFor="vin">Vin</label>
                        </div>
                        <div className="mb-3">
                            <select value={formData.model_id} onChange={handleFormChange} required name="model_id" id="model" className="form-select">
                                <option value="">Choose a model</option>
                                {models.map(model => {
                                    return (
                                        <option key={model.id} value={model.id}>
                                            {model.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default CreateAutomobile;