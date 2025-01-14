import { useState } from "react";

export default function Title() {
  return (
    <div className="relative z-50 font-iextrabold">
      <h5 className="m-1 text-2xl text-quinary">Hackathon</h5>
      <h1 className="relative z-0 w-11/12 font-iextrabold text-4xl text-white xs:text-5xl sm:text-6xl md:w-full md:text-7xl lg:text-8xl 2xl:w-5/6">
        Create products, train skills and learn new technologies.
      </h1>
    </div>
  );
}
