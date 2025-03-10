const tourFilter = (tours, searchTour) => {
  const { origin, destination, startDate, endDate } = searchTour;
  const targetStartDate = startDate ? convertDate(startDate) : "";
  const targetEndDate = endDate ? convertDate(endDate) : "";
  //   console.log({ origin, destination, startDate, endDate });
  if(!origin && !destination && !startDate && !endDate)
    return [];
  let filteredData = [...tours];
  if (origin) {
    filteredData = filteredData.filter((tour) => {
      if (tour.origin["name"] === origin) return tour;
    });
  }
  if (destination) {
    filteredData = filteredData.filter((tour) => {
      if (tour.destination["name"] === destination) return tour;
    });
  }
  if (startDate && endDate) {
    filteredData = filteredData.filter((tour) => {
        const start=convertDate(tour.startDate)
        const end=convertDate(tour.endDate);
        if(start>=targetStartDate &&end<=targetEndDate)
            return tour;
    });
  }
  return filteredData;
};
const convertDate = (date) => {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    return d;
  };
export { tourFilter };
