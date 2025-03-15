import GlobalSearch from "@/components/icons/GlobalSearch";
import Location from "@/components/icons/Location";

const customOriginCity = () => {
  let originCity = [
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

  originCity = originCity.map((city) => ({ ...city, icon: <Location /> }));
  return originCity;
};
const customDestinationCity = () => {
  let originCity = [
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

  originCity = originCity.map((city) => ({ ...city, icon: <GlobalSearch /> }));
  return originCity;
};

export { customDestinationCity, customOriginCity };
