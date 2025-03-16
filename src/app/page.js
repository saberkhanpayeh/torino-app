import HomePage from "@/components/template/HomePage";
import { getToursList } from "@/services/serverDataFetching";

export default async function Home() {
  const { data, error } = await getToursList();
  return (
    <>
      <HomePage data={data} />
    </>
  );
}
