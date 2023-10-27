import { useState, useEffect } from 'react';

function AutomobileInventory (props) {
    const [autos, setAutos] = useState([]);
    const [vinsSales, setVinsSales] = useState([])
    const [vinsApptmts, setVinsApptmts] = useState([])

    async function loadSales() {
        const urlSale = await fetch('http://localhost:8090/api/sales/')
        const responseSale = await urlSale.json();
        const vins = responseSale.sales.map(sale => sale.automobile.vin)
        setVinsSales(vins)
    }

    async function loadApptmts() {
        const urlApptmt = await fetch('http://localhost:8080/api/appointments/')
        const responseApptmt = await urlApptmt.json();
        const vins = responseApptmt.appointments.map(appointment => appointment.vin.toUpperCase())
        setVinsApptmts(vins)
    }

    useEffect(() => {
        loadApptmts();
    }, []);

    async function loadData() {
        const request = await fetch('http://localhost:8100/api/automobiles/')
        const response = await request.json();
        setAutos(response.autos)
    }

    function isSoldApptmts(automobile) {
        return vinsApptmts.includes(automobile.vin.toUpperCase());
    }

    function isSoldSales(automobile) {
        return vinsSales.includes(automobile.vin.toUpperCase())
    }


    useEffect(() => {
        loadSales();
        loadData();
    }, []);

    return(
        <div>
            <h1>Automobiles</h1>
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
                                <td>{automobile.vin.toUpperCase()}</td>
                                <td>{automobile.model.name}</td>
                                <td>{isSoldApptmts(automobile)||isSoldSales(automobile)? "Yes" : "No"}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default AutomobileInventory