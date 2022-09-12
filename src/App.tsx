import {useState} from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { CarBuilderForm } from './CarBuilderForm';
import { ConfirmationForm } from './ConfirmationForm';


export enum VehicleColor {
  blue = "Blue",
  red = "Red",
  yellow = "Yellow",
}

export enum VehicleType {
  truck = "Truck",
  van = "Van"
}

export enum VehicleHasCamperAddOn {
  yes = "yes",
  no = "no"
}

export interface IVehicle {
  type: VehicleType,
  color: VehicleColor,
  camperAddOn: VehicleHasCamperAddOn
}

function App() {
  const [vehicle, setVehicle] = useState<IVehicle>({type: VehicleType.truck, color: VehicleColor.blue, camperAddOn: VehicleHasCamperAddOn.no})

  return (
    <div style={{padding: "1em"}}>
      <Routes>
        <Route path="/" element={<CarBuilderForm vehicleState={vehicle} updateVehicleState={setVehicle} />} />
        <Route path="/confirmation" element={<ConfirmationForm vehicleState={vehicle} />} />
      </Routes>
    </div>
    
  );
}

export default App;

