import AirplaneBlank from "@/components/icons/transport/AirplaneBlank";
import BusBlank from "@/components/icons/transport/BusBlank";
import ShipBlank from "@/components/icons/transport/ShipBlank";
import SuvBlank from "@/components/icons/transport/SuvBlank";
import TrainBlank from "@/components/icons/transport/TrainBlank";

const vehicles = [
  { id: 1, name: "airplane", label: "هواپیما", icon: <AirplaneBlank /> },
  { id: 2, name: "bus", label: "اتوبوس", icon: <BusBlank /> },
  { id: 3, name: "train", label: "قطار", icon: <TrainBlank /> },
  { id: 4, name: "SUV", label: "شاسی بلند", icon: <SuvBlank /> },
  { id: 5, name: "ship", label: "کشتی", icon: <ShipBlank /> },
];

const vehicleType = (name) => {
  const [vehicle] = vehicles.filter((vehicle) => vehicle.name === name);
//   console.log(...vehicle);
  return vehicle || "";
};

export { vehicleType };
