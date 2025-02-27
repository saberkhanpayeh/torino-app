const getToursList = async () => {
    //we want to create ISR page and data updating after each 7 day
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}tour`, {
      next: { revalidate: 60 * 60 * 24 * 7 },
    });
    const data = await response.json();
    return { data };
  } catch (error) {
    return { error };
  }
};
const getTourDetails = async (tourId) => {
  //we want to create ISR details page and data updating after each 7 day
try {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}tour/${tourId}`, {
    next: { revalidate: 60 * 60 * 24 * 7 },
  });
  const data = await response.json();
  return { data };
} catch (error) {
  return { error };
}
};

export { getToursList,getTourDetails };
