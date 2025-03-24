import Image from "next/image";
import React from "react";

function SiteLogo() {
  return <Image src="/images/torino-logo.png" width={146} height={44} alt="torino-logo" priority={true} />;
}

export default SiteLogo;
