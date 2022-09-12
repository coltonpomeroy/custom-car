import React from 'react';
import { IVehicle, VehicleColor, VehicleHasCamperAddOn, VehicleType } from './App';

interface IConfirmationFormProps {
    vehicleState: IVehicle
}

export const ConfirmationForm = (props: IConfirmationFormProps) => {
    const {vehicleState} = props
    const bodyPrice = vehicleState.type === VehicleType.truck ? 10000 : 15000
    const colorPrice = vehicleState.color === VehicleColor.blue ? 2000 : (vehicleState.color === VehicleColor.yellow ? 25000 : 30000)
    const camperAddOnPrice = vehicleState.camperAddOn === VehicleHasCamperAddOn.yes ? 10000 : 0;
    const totalPrice = bodyPrice + colorPrice + camperAddOnPrice

    return (
        <div>
            <h2>You're going to love this thing!</h2>
            <div>
                <table>
                    <tr>
                        <th>Item Description</th>
                        <th>Price</th>
                    </tr>
                    <tr>
                        <td>{vehicleState.type} base</td>
                        <td>{bodyPrice}</td>
                    </tr>
                    <tr>
                        <td>{vehicleState.color} paint</td>
                        <td>{colorPrice}</td>
                    </tr>
                    {
                        vehicleState.camperAddOn === VehicleHasCamperAddOn.yes ?
                        <tr>
                            <td>Optional Camper Add-On</td>
                            <td>{camperAddOnPrice}</td>
                        </tr> : null
                    }
                    <tr>
                        <td></td>
                        <td><h3>Total: {totalPrice}</h3></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}