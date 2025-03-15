import GlobalSearch from "@/components/icons/GlobalSearch";
import Location from "@/components/icons/Location";
const originCity= [
  { value: "Tehran", label: "تهران" },
  { value: "Sananndaj", label: "سنندج" },
  { value: "Madrid", label: "مادرید" },
  { value: "Hewler", label: "هولیر" },
  { value: "Isfahan", label: "اصفهان" },
  { value: "Italy", label: "ایتالیا" },
  { value: "Mazandaran", label: "مازندران" },
  { value: "Sulaymaniyah", label: "سلیمانیه" },
  { value: "Gilan", label: "گیلان" },
];
const destinationCity=[
  { value: "Tehran", label: "تهران" },
  { value: "Sananndaj", label: "سنندج" },
  { value: "Madrid", label: "مادرید" },
  { value: "Hewler", label: "هولیر" },
  { value: "Isfahan", label: "اصفهان" },
  { value: "Italy", label: "ایتالیا" },
  { value: "Mazandaran", label: "مازندران" },
  { value: "Sulaymaniyah", label: "سلیمانیه" },
  { value: "Gilan", label: "گیلان" },
];
const customOriginCity = () => {
  let listOriginCity =[];

  listOriginCity = originCity.map((city) => ({ ...city, icon: <Location /> }));
  return listOriginCity;
};
const customDestinationCity = () => {
  let listDestinationCity=[]; 

  listDestinationCity = destinationCity.map((city) => ({ ...city, icon: <GlobalSearch /> }));
  return listDestinationCity;
};

const getOriginCity=(name)=>{
 const [city]=originCity.filter((city)=>city.value===name);
  return city ?city.label:"";
}
const getDestinationCity=(name)=>{
  const [city]=destinationCity.filter((city)=>city.value===name);
  return city ?city.label:"";
}
export { customDestinationCity, customOriginCity,getOriginCity,getDestinationCity };
