import { useState, useEffect } from 'react';


function AppointmentList (props) {
    const [appointments, setAppointments] = useState([]);
    const [vinArray, setVinArray] = useState([])
    const [cancel, setCancel] = useState(false)
    const [finish, setFinish] = useState(false)
    const [notCanceled, setNotCanceled] = useState(false)
    const [notFinished, setNotFinished] = useState(false)


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

    async function handleCancel(id) {
        const response = await fetch(`http://localhost:8080/api/appointments/${id}/cancel/`, {
            method: "put"
        })
        if (response.ok) {
            setCancel(true)
            setTimeout(() => {
                setCancel(false);
            }, 1000)
            setAppointments(appointments.filter((appointments) => appointments.id != id))
        } else {
            setNotCanceled(true)
            setTimeout(() => {
                setNotCanceled(false);
            }, 1000)
        }
    }

    async function handleFinish(id) {
        const response = await fetch(`http://localhost:8080/api/appointments/${id}/finish/`, {
            method: "put"
        })
        if (response.ok) {
            setFinish(true)
            setTimeout(() => {
                setFinish(false);
            }, 1000)
            setAppointments(appointments.filter((appointments) => appointments.id != id))
        } else {
            setNotFinished(true)
            setTimeout(() => {
                setNotFinished(false);
            }, 1000)
        }
    }

    return (
        <div>
            <h1>Service Appointments</h1>
            {cancel && (
                <div className="alert alert-success" role="alert">
                    Successfully canceled appointment.
                </div>
            )}
            {finish && (
                <div className="alert alert-success" role="alert">
                    Successfully set appointment status to "finished".
                </div>
            )}
            {notCanceled && (
                <div className="alert alert-danger" role="alert">
                    Could not cancel appointment.
                </div>
            )}
            {notFinished && (
                <div className="alert alert-danger" role="alert">
                    Could not set appointment status to "finished".
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
                    </tr>
                </thead>
                <tbody>
                    {appointments
                    .filter(appointment => appointment.status === "created")
                    ?.map(appointment => {
                        return (
                            <tr key={appointment.id}>
                                <td>{appointment.vin.toUpperCase()}</td>
                                <td>{isVIP(appointment)? "Yes":"No"}</td>
                                <td>{appointment.customer}</td>
                                <td>{new Date(appointment.date_time).toLocaleDateString()}</td>
                                <td>{new Date(appointment.date_time).toLocaleTimeString()}</td>
                                <td>{appointment.technician.first_name} {appointment.technician.last_name}</td>
                                <td>{appointment.reason}</td>
                                <td><button className="btn btn-danger" onClick={(e) => handleCancel(appointment.id)}>Cancel</button></td>
                                <td><button className="btn btn-success" onClick={(e) => handleFinish(appointment.id)}>Finish</button></td>
                            </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
}

export default AppointmentList