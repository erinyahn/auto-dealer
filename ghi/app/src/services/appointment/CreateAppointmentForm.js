import React, { useEffect, useState } from 'react';

const initialFormData = {
    date_time: '',
    reason: '',
    vin: '',
    customer: '', 
    technician: ''
}

function CreateAppointmentForm() {
    const [formData, setFormData] = useState(initialFormData)
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')

    const [technicians, setTechnicians] = useState([])

    const fetchData = async() => {
        const url = 'http://localhost:8080/api/technicians/';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setTechnicians(data.technicians)
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const initDateTime = new Date(date + 'T' + time)
        const utcYear = initDateTime.getUTCFullYear()
        const utcMonth = initDateTime.getUTCMonth() + 1 
        const utcDay = initDateTime.getUTCDate()
        const utcHours = initDateTime.getUTCHours()
        const utcMinutes = initDateTime.getUTCMinutes()
        const utcSeconds = initDateTime.getUTCSeconds()
        const dateTime = `${utcYear}-${String(utcMonth).padStart(2, '0')}-${String(utcDay).padStart(2, '0')}T${String(utcHours).padStart(2, '0')}:${String(utcMinutes).padStart(2, '0')}:${String(utcSeconds).padStart(2, '0')}+00:00`;

        const updatedFormData = {
            ...formData,
            date_time: dateTime
        }

        const appointmentUrl = 'http://localhost:8080/api/appointments/';
        const fetchOptions = {
            method: 'post',
            body: JSON.stringify(updatedFormData),
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const appointmentResponse = await fetch(appointmentUrl, fetchOptions);
        if (appointmentResponse.ok) {
            setFormData(initialFormData)
            setDate('')
            setTime('')
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

    const handleDateChange = (e) => {
        const value = e.target.value;
        setDate(value);
    }
    
    const handleTimeChange = (e) => {
        const value = e.target.value;
        setTime(value);
    }

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a service appointment</h1>
                    <form onSubmit={handleSubmit} id="create-appointment-form">
                        <div className="form-floating mb-3">
                            <input value={formData.vin} onChange={handleFormChange} placeholder="Automobile VIN" required type="text" name="vin" id="vin" className="form-control" />
                            <label htmlFor="vin">Automobile VIN</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={formData.customer} onChange={handleFormChange} placeholder="Customer Name" required type="text" name="customer" id="customer" className="form-control" />
                            <label htmlFor="customer">Customer Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={date} onChange={handleDateChange} placeholder="Date" required type="date" name="date" id="date" className="form-control" />
                            <label htmlFor="date">Date</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={time} onChange={handleTimeChange} placeholder="Time" required type="time" name="time" id="time" className="form-control" />
                            <label htmlFor="time">Time</label>
                        </div>
                        <div className="mb-3">
                            <select value={formData.technician} onChange={handleFormChange} required name="technician" id="technician" className="form-select">
                                <option value="">Choose a technician</option>
                                {technicians.map(technician => {
                                    return (
                                        <option key={technician.employee_id} value={technician.employee_id}>
                                            {technician.first_name} {technician.last_name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={formData.reason} onChange={handleFormChange} placeholder="Reason" required type="text" name="reason" id="reason" className="form-control" />
                            <label htmlFor="reason">Reason</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateAppointmentForm