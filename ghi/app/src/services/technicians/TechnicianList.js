import { useState, useEffect } from 'react';

function TechnicianList (props) {
    const [technicians, setTechnicians] = useState([]);

    async function loadData() {
        const request = await fetch('http://localhost:8080/api/technicians/')
        const response = await request.json();
        setTechnicians(response.technicians)
    }

    useEffect(() => {
        loadData();
    }, []);


    return(
        <div>
            <h1>Technicians</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>First name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {technicians?.map(technician => {
                        return (
                            <tr key={technician.employee_id}>
                                <td>{technician.employee_id}</td>
                                <td>{technician.first_name}</td>
                                <td>{technician.last_name}</td>
                            </tr>
                        );
                    })}
                </tbody>
        </table>
        </div>
    );
}

export default TechnicianList