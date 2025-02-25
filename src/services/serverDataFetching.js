const getToursData = async () => {
    //we want to create ISR page and data updating afrter each 7 day
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

export { getToursData };
