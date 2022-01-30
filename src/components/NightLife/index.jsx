import React from "react";

// component
import NightLifeCarousel from "./NightLifeCarousel";

function Dining() {
  return (
    <div className="mb-10">
      <h1 className="text-xl my-4 md:my-8 md:text-3xl md:font-semibold">
        Collections
      </h1>
      <h2 className="text-l my-4 md:my-8 md:text-2xl">Explore curated lists of top pubs, bars and clubs in Bengaluru, based on trends. <span style={{"font-size":"12px","color":"red"}}>Covid-19 guidelines followed</span> </h2> 
      <NightLifeCarousel />
    </div>
  );
}

export default Dining;
