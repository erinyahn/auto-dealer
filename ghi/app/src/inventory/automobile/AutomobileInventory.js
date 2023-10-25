import { useState, useEffect } from 'react';

function AutomobileInventory (props) {
    const [autos, setautos] = useState([]);

    async function loadData() {
        const request = await fetch('http://localhost:8100/api/automobiles/')
        const response = await request.json();
        setautos(response.autos)
    }

    useEffect(() => {
        loadData();
    }, []);

    return(
        <table className="table table-striped">
        <thead>
            <tr>
                <th>Color</th>
                <th>Year</th>
                <th>Vin</th>
                <th>Model</th>
                <th>Sold</th>
            </tr>
        </thead>
        <tbody>
            {autos?.map(automobile => {
                return (
                    <tr key={automobile.id}>
                        <td>{automobile.color}</td>
                        <td>{automobile.year}</td>
                        <td>{automobile.vin}</td>
                        <td>{automobile.model.name}</td>
                        <td>{automobile.sold? "Yes": "No"}</td>
                    </tr>
                );
            })}
        </tbody>
    </table>
    );
}

export default AutomobileInventory