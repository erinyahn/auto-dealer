import React, { useEffect, useState } from 'react';


const initialFormData = {
    name: '',
    picture_url: '',
    manufacturer_id: '',
}

function CreateVehicleModel() {
    const [formData, setFormData] = useState(
        initialFormData        
    )

    const [manufacturers, setManufacturers] = useState([])

    const fetchData = async() => {
        const url = 'http://localhost:8100/api/manufacturers/';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setManufacturers(data.manufacturers)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const modelUrl = 'http://localhost:8100/api/models/';
        const fetchOptions = {
            method: 'post',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const modelResponse = await fetch(modelUrl, fetchOptions);
        if (modelResponse.ok) {
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
                    <h1>Create models</h1>
                    <form onSubmit={handleSubmit} id="create-model-form">
                        <div className="form-floating mb-3">
                            <input value={formData.name} onChange={handleFormChange} placeholder="Model name" required type="text" name="name" id="name" className="form-control" />
                            <label htmlFor="name">Model name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={formData.picture_url} onChange={handleFormChange} placeholder="Picture URL" required type="url" name="picture_url" id="picture_url" className="form-control" />
                            <label htmlFor="picture_url">Picture URL</label>
                        </div>
                        <div className="mb-3">
                            <select value={formData.manufacturer_id} onChange={handleFormChange} required name="manufacturer_id" id="manufacturer" className="form-select">
                                <option value="">Choose a manufacturer</option>
                                {manufacturers?.map(manufacturer => {
                                    return (
                                        <option key={manufacturer.id} value={manufacturer.id}>
                                            {manufacturer.name}
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

export default CreateVehicleModel;