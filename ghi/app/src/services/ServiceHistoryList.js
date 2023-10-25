import { useState, useEffect } from 'react';


function ServiceHistoryList (props) {
    const [appointments, setAppointments] = useState([]);
    const [vinArray, setVinArray] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    async function loadData() {
        const request = await fetch('http://localhost:8080/api/appointments/')
        const response = await request.json();
        setAppointments(response.appointments)
    }

    async function loadAutomobiles() {
        const urlAuto = await fetch('http://localhost:8100/api/automobiles/')
        const responseAuto = await urlAuto.json();
        const vins = responseAuto.autos.map(auto => auto.vin)
        setVinArray(vins)
        }

    useEffect(() => {
        loadAutomobiles();
        loadData();
    }, []);
    
    function isVIP(appointment) {
        return vinArray.includes(appointment.vin)
    }

    function handleSearch() {
        const filteredAppointments = appointments.filter(appointment =>
            appointment.vin.toUpperCase().includes(searchTerm.toUpperCase())
        );
        setSearchResults(filteredAppointments);
    }

    

    return (
        <div>
            <h1>Service History</h1>

            <div className="input-group">
                <input type="search" 
                className="form-control rounded" 
                placeholder="Search by VIN..." 
                aria-label="Search" 
                aria-describedby="search-addon" 
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
                <button type="button" className="btn btn-outline-secondary" onClick={handleSearch}>Search</button>
            </div>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>VIN</th>
                        <th>Is VIP?</th>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Technician</th>
                        <th>Reason</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {(searchResults.length > 0 ? searchResults : appointments).map(appointment => (
                        <tr key={appointment.id}>
                            <td>{appointment.vin}</td>
                            <td>{isVIP(appointment) ? 'Yes' : 'No'}</td>
                            <td>{appointment.customer}</td>
                            <td>{new Date(appointment.date_time).toLocaleDateString()}</td>
                            <td>{new Date(appointment.date_time).toLocaleTimeString()}</td>
                            <td>{appointment.technician.first_name} {appointment.technician.last_name}</td>
                            <td>{appointment.reason}</td>
                            <td>{appointment.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ServiceHistoryList