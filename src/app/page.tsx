"use client";

import Button from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="bg-[#3643BA] h-screen w-screen flex flex-col gap-12 justify-center items-center">
      <Image src="/logotypo.svg" alt="logo" width={330} height={87.88} />

      <Image src="/logo.svg" alt="logo" width={200} height={200} />

      <Button
        label="Démo"
        onClick={() => router.push("eventdetails")}
        className="!bg-[#D0FF5F] text-3xl font-semibold !text-[#3643BA]"
      />
    </div>
  );
}
