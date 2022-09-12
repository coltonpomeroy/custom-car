import { IVehicle, VehicleColor, VehicleHasCamperAddOn, VehicleType } from './App'
import Truck from './Truck';
import Van from './Van';
import { Link } from "react-router-dom";

interface ICarBuilderFormProps {
    vehicleState: IVehicle,
    updateVehicleState: Function
}

export const CarBuilderForm = (props: ICarBuilderFormProps) => {
    const {vehicleState, updateVehicleState} = props;
    return (
      <div className="App">
          <h2>Let's build a car!</h2>
          <div>
          <label>Vehicle Type</label>
            <select defaultValue={vehicleState.type} onChange={ e => updateVehicleState({...vehicleState, type: e.currentTarget.value as VehicleType})}>
              {Object.entries(VehicleType).map(([key, value]) => <option key={key}>{value}</option>)}
            </select>
          </div>
          <div>
            <label>Vehicle Color</label>
            <select defaultValue={vehicleState.color} onChange={ e => updateVehicleState({...vehicleState, color: e.currentTarget.value as VehicleColor})}>
              {Object.entries(VehicleColor).map(([key, value]) => <option key={key}>{value}</option>)}
            </select>
          </div>
          <div>
            <label>Camper Add-On?</label>
            <select defaultValue={vehicleState.camperAddOn} onChange={ e => updateVehicleState({...vehicleState, camperAddOn: e.currentTarget.value as VehicleHasCamperAddOn})}>
              <option>yes</option>
              <option>no</option>
            </select>
          </div>
          <div style={{maxWidth: 250, paddingTop: '4em'}}>
            <div>
              {vehicleState.type === VehicleType.truck ? 
                <Truck fill={vehicleState.color} hasAddOn={vehicleState.camperAddOn} /> : 
                <Van fill={vehicleState.color} hasAddOn={vehicleState.camperAddOn} />}
            </div>
          </div>
          <div style={{paddingTop: "1em"}}>
            <Link style={{textDecoration: "none", fontWeight: "bold", color: "black", padding: "1em", border: "1px black solid"}} to="/confirmation">BUILD IT!</Link>
          </div>
        </div>
    )
  }