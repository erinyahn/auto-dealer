import { useState, useEffect } from 'react';


function ManufacturersList (props) {
    const [manufacturers, setManufacturers] = useState([]);

    async function loadData() {
        const request = await fetch('http://localhost:8100/api/manufacturers/')
        const response = await request.json();
        setManufacturers(response.manufacturers)
    }

    useEffect(() => {
        loadData();
    }, []);


    return(
        <div>
            <h1>manufacturers</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {manufacturers?.map(manufacturer => {
                        return (
                            <tr key={manufacturer.id}>
                                <td>{manufacturer.name}</td>
                            </tr>
                        );
                    })}
                </tbody>
        </table>
        </div>
    );
}

export default ManufacturersList