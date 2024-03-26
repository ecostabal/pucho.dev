import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export const NotFound = () => {
  return (
    <div className="h-screen max-h-screen overflow-hidden flex flex-col items-center justify-center">
      <p className="font-exo2 mb-6 uppercase tracking-widest">¡Ups! Nada por aquí.</p>
      <div className="flex justify-center">
        <a
          href="/"
          className="font-exo2 uppercase tracking-widest text-xs border border-zinc-900 text-zinc-900 p-4 hover:bg-zinc-900 hover:text-white flex items-center justify-center transition-all duration-300 ease-in-out w-52"
        >
          <span>Volver</span>
          <ArrowLongRightIcon className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};
