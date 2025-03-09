"use client";

import NetworkError from "@/components/module/NetworkError";

export default function Error({ error, reset }) {
  return (
    <>
      <NetworkError reset={reset} />
    </>
  );
}
