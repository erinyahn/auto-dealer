import { useState, useEffect } from 'react';


function ServiceHistoryList (props) {
    const [appointments, setAppointments] = useState([]);
    const [vinArray, setVinArray] = useState([])

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


    return(
        <div>
            <h1>Service History</h1>

            {/* <form id="searchForm">
            <label htmlFor="vinSearch"/>
            <input type="text" id="vinSearch" placeholder="Search by VIN..." />
            <button type="button" onClick="searchAppointments()">Search</button>
            </form> */}
            
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
                    {appointments?.map(appointment => {
                        return (
                            <tr key={appointment.id}>
                                <td>{appointment.vin}</td>
                                <td>{isVIP(appointment)? "Yes":"No"}</td>
                                <td>{appointment.customer}</td>
                                <td>{new Date(appointment.date_time).toLocaleDateString()}</td>
                                <td>{new Date(appointment.date_time).toLocaleTimeString()}</td>
                                <td>{appointment.technician.first_name} {appointment.technician.last_name}</td>
                                <td>{appointment.reason}</td>
                                <td>{appointment.status}</td>
                            </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
}

export default ServiceHistoryList