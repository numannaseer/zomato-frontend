import React from "react";

// component
import DiningCarousel from "./DiningCarousel";

function Dining() {
  return (
    <div className="mb-10">
      <h1 className="text-xl my-4 md:my-8 md:text-3xl md:font-semibold">
        Collections
      </h1>
      <h2 className="text-l my-4 md:my-8 md:text-2xl ">Explore curated lists of top restaurants, cafes and kitchens in Bengaluru, based on trends.</h2>
      <DiningCarousel />
    </div>
  );
}

export default Dining;
