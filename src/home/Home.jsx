import React from "react";
import HomeHero from "../components/HomeHero";
import SocialMediaLinks from "../components/SocialMediaLinks";

export const Home = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="h-screen max-h-screen overflow-hidden flex items-center justify-center relative w-full">
      <HomeHero />
      <div className="absolute top-1/2 transform -translate-y-1/2 rotate-0 left-[-11rem] md:left-[-9.5rem]">
        <SocialMediaLinks />
      </div>
      <img src="logoblanco.svg" alt="Logo" className="absolute top-4 left-4 md:top-8 md:left-8 w-auto h-8" />
      <div className="font-exo2 absolute bottom-4 right-4 md:bottom-8 md:right-8 text-white text-xs uppercase tracking-widest">
       © pucho.dev - {currentYear}
      </div>
    </div>
  );
};
