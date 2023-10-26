import { useState, useEffect } from 'react';

function VehicleModelList (props) {
    const [models, setModels] = useState([]);

    async function loadData() {
        const request = await fetch('http://localhost:8100/api/models/')
        const response = await request.json();
        setModels(response.models)
    }

    useEffect(() => {
        loadData();
    }, []);


    return(
        <div>
            <h1>Models</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Manufacturer</th>
                        <th>Picture</th>
                    </tr>
                </thead>
                <tbody>
                    {models?.map(model => {
                        return (
                            <tr key={model.id}>
                                <td>{model.name}</td>
                                <td>{model.manufacturer.name}</td>
                                <td><img src={model.picture_url} width="300" /></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default VehicleModelList