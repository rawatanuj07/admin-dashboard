"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../../components/landingcomponents/ui/header";
import Footer from "../../components/landingcomponents/ui/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  return (
    <>
      <Header />

      <main className="w-full grow overflow-x-hidden">{children}</main>

      <Footer border={true} />
    </>
  );
}
