import { useState, useEffect } from 'react';


function ServiceHistoryList (props) {
    const [appointments, setAppointments] = useState([]);
    const [vinArray, setVinArray] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [vinNotFound, setVinNotFound] = useState(false);

    async function loadData() {
        const request = await fetch('http://localhost:8080/api/appointments/')
        const response = await request.json();
        setAppointments(response.appointments)
    }

    async function loadAutomobiles() {
        const urlAuto = await fetch('http://localhost:8100/api/automobiles/')
        const responseAuto = await urlAuto.json();
        const vins = responseAuto.autos.map(auto => auto.vin.toUpperCase())
        setVinArray(vins)
    }

    useEffect(() => {
        loadAutomobiles();
        loadData();
    }, []);
    
    function isVIP(appointment) {
        return vinArray.includes(appointment.vin.toUpperCase())
    }

    function handleSearch() {
        const filteredAppointments = appointments.filter(appointment =>
            appointment.vin.toUpperCase() === searchTerm.toUpperCase()
        )
        if (filteredAppointments.length === 0) {
            setVinNotFound(true)
            setTimeout(() => {
                setVinNotFound(false);
            }, 1000)
        } else {
            setVinNotFound(false)
        }
        setSearchResults(filteredAppointments);
        setSearchTerm('')
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter' && event.target === document.activeElement) {
            handleSearch();
        }
    }

    return (
        <div>
            <h1>Service History</h1>

            <div className="input-group">
                <input 
                type="search" 
                className="form-control rounded" 
                placeholder="Search by VIN..." 
                aria-label htmlFor="Search" 
                aria-describedby="search-addon" 
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
            />
                <button 
                type="button" 
                className="btn btn-outline-secondary" 
                onClick={handleSearch}>
                    Search
                </button>
            </div>

            {vinNotFound && (
                <div className="alert alert-danger" role="alert">
                    VIN does not exist.
                </div>
            )}

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
                            <td>{appointment.vin.toUpperCase()}</td>
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