export default async function sitemap() {
  const staticRoutes = ["", "about-us", "contact-us", "services"];
  const routes = staticRoutes.map((route) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}${route}`,
    lastModified: new Date().toString(),
  }));
  const tourRoutes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}tour`);
  const data = await tourRoutes.json();
  const tours = data.map((tour) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}tour/${tour.id}`,
    lastModified: new Date().toString(),
  }));
  return [...routes, ...tours];
}
