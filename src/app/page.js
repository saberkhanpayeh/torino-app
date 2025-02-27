import SendOtpModal from "@/components/module/SendOtpModal";
import AuthPage from "@/components/template/AuthPage";
import HomePage from "@/components/template/HomePage";
import { getToursList } from "@/services/serverDataFetching";
import Image from "next/image";

export default async function Home() {
  const { data, error } = await getToursList();
  //console.log({data,error});
  //console.log(data);
  return (
    <>
      <HomePage data={data} />
    </>
  );
}
