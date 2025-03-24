import { object } from "yup";

const { getOriginCity, getDestinationCity } = require("@/constant/cities");
const { vehicleType } = require("@/constant/transport");

const createDescription = (data) => {
  const { title, origin, destination, fleetVehicle, options } = data;
  const originCity = getOriginCity(origin.name);
  const destinationCity = getDestinationCity(destination.name);
  const vehicle = vehicleType(fleetVehicle);
 console.log(vehicle)
  return `تور ${title} از مبدا ${originCity} به مقصد ${destinationCity} خواهد بود که با${vehicle.label} مجهز شرکت انجام خواهد شد.امکانات رفاهی سفر شامل موارد ${arrayToString(
    options
  )} است.`;
};

function arrayToString(arr, separator = ",") {
  return arr.join(separator);
}

export { createDescription };
