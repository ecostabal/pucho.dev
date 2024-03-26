import React from "react";
import HomeHero from "../components/HomeHero";
import SocialMediaLinks from "../components/SocialMediaLinks";

export const Home = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="h-screen max-h-screen overflow-hidden flex items-center justify-center relative">
      <HomeHero />
      <div className="absolute top-1/2 transform -translate-y-1/2 rotate-0 left-[-9.5rem]">
        <SocialMediaLinks />
      </div>
      <img src="logoblanco.svg" alt="Logo" className="absolute top-8 left-8 w-auto h-8" />
      <div className="font-exo2 absolute bottom-8 right-8 text-white text-xs uppercase tracking-widest">
       © pucho.dev - {currentYear}
      </div>
    </div>
  );
};
